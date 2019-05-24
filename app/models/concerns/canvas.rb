require 'canvas-api'
require 'json'

class CanvasClass

        def initialize
            # host =
            # case ENV["RAILS_ENV"].downcase
            #     when 'development', 'test', 'dev'
            #     else
            #         ENV["CANVAS_API_HOST"]
            # end
            @canvas = Canvas::API.new(:host => "https://dartmouth.test.instructure.com", :token => "1064~OiPTGu1iu8W8ItR7U3X5QK35lgRouJIB9JjsDoltMsBy3bI5B6sZRGXzUFI3OZdv")
        end

        def get_canvas(path)
            records = @canvas.get(path)
            while records.more?
                records.next_page!
            end
            records
        end

      def make_new_group(courseid, enrollments)
        path = "/api/v1/courses/#{courseid}/group_categories"
        group_set  = @canvas.post(path, {'name' => 'morgan_test'})
        groupset_id = group_set["id"]
        split_into_groups(enrollments, groupset_id)
        # add_people_to_one_group(enrollments, group_id)
      end

      def split_into_groups(enrollments, groupset_id)
        totalEnrollment = enrollments.length
        numGroups = 4

        counter = 0
        currentSpace = 0

        while counter < numGroups do
          groupEnrollment = []
          path2 = "/api/v1/group_categories/#{groupset_id}/groups"
          groupTitle = 'group'  + (counter+1).to_s
          group  = @canvas.post(path2, {'name' => groupTitle})
          group_id = group["id"]

          while currentSpace < ((counter + 1) * (totalEnrollment/numGroups) + 1) do
            if currentSpace < totalEnrollment
              current_user = enrollments[currentSpace]
              user_id = current_user["user_id"]
              groupEnrollment.push(user_id)
            end
            currentSpace = currentSpace + 1
          end
          counter = counter + 1
          add_people_to_one_group(groupEnrollment, group_id)

        end

      end

      def add_people_to_one_group(enrollments, group_id)
        totalEnrollment = enrollments.length
        grouppath = "/api/v1/groups/#{group_id}/memberships"
        counter =  0
        while counter < totalEnrollment  do
          user_id = enrollments[counter]
          membermayble  = @canvas.post(grouppath, {'user_id' => user_id, 'group_id': group_id })
          counter = counter + 1
        end
      end

      def canvas_bulk_hash(course_id)
           enrollments=[]
           sections=[]
           groups=[]
           group_memberships={}
           puts "hi"
           puts course_id

           #canvas_hash = JSON.parse(File.read("app/models/concerns/canvas_test_data.json").chomp)
           #enrollments = canvas_hash["enrollments"]# DEBUG
           enrollments = get_canvas("/api/v1/courses/#{course_id}/enrollments?per_page=50")
           canvas_sections = get_canvas("/api/v1/courses/#{course_id}/sections")
           sections = canvas_sections if canvas_sections.length > 1
           groups = get_canvas("/api/v1/courses/#{course_id}/groups")

           groups.each do |group|
                memberships = get_canvas("/api/v1/groups/#{group["id"]}/memberships") #check per_page
                group_memberships[group["id"]] = memberships.collect {|m| m["user_id"]}
           end

           return {:enrollments=>enrollments, :sections=>sections, :groups=>groups, :group_memberships=>group_memberships}
       end
end
