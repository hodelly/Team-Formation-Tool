require 'canvas.rb'
require 'canvas_authenitcator.rb'


class CanvasResolver
    def self.resolve(type_descriptor, *args)
        @resolver_types = {:canvas=>CanvasClass, :authenticator=>CanvasAuthenticator}
    end
end
