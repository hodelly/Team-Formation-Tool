require 'canvas.rb'
require 'canvas_authenitcator.rb'


class CanvasResolver
    def self.resolve(type_descriptor, *args)
        @resolver_types = {:canvas=>CanvasClass, :authenticator=>CanvasAuthenticator}
        @resolver_types[type_descriptor].new(*args)
    end
end
