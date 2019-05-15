# frozen_string_literal: true
require 'canvas_resolver.rb'

class HelloWorldController < ApplicationController
  layout "hello_world"

  # sections = canvas_data[:sections]
  # groups = canvas_data[:groups]
  # group_memberships = canvas_data[:group_memberships]


  def index
    canvas = CanvasResolver.resolve(:canvas)
    ## Question: This is null. Am I auppose to be able to get a value from this or should I be using the mocks?
    course_id = session[:custom_canvas_course_id]
    # Also saying that canvas_bulk_hash doesnt exist but I am not sure why?
    canvas_data = canvas.canvas_bulk_hash(course_id)
    enrollments = canvas_data[:enrollments]
    @hello_world_props = { name: "Stranger", canvas_enrollments: enrollments }
  end
end
