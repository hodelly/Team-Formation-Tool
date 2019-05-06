# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"
  before_action :get_canvas_auth

  def index
    @hello_world_props = { name: "Stranger", canvas_userName: session[:lis_person_name_full] }
  end
end
