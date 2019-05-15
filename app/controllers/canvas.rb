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
            @canvas = Canvas::API.new(:host => "https://dartmouth.test.instructure.com", :token => "1064~Eyi1dVNWY1qCjVFFgEExhB27oB5O2idT4aCnRFt7gyRoPoFN8lG2464lq4NNSpXD")
        end


        def canvas_bulk_hash(course_id)
           enrollments=[]
           sections=[]
           groups=[]
           group_memberships={}
           canvas_hash = JSON.parse(IO.read("./canvas_test_data.json").chomp)
           enrollments = canvas_hash["enrollments"]
           return {:enrollments=>enrollments}
       end
end
