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
