# frozen_string_literal: true
require 'canvas_resolver.rb'

class HelloWorldController < ApplicationController
  layout "hello_world"

  # sections = canvas_data[:sections]
  # groups = canvas_data[:groups]
  # group_memberships = canvas_data[:group_memberships]


  def index
    canvas = CanvasResolver.resolve(CanvasClass.new)
    canvas_data = canvas.canvas_bulk_hash(course_id)
    enrollments = canvas_data[:enrollments]
    @hello_world_props = { name: "Stranger", canvas_enrollments: enrollments }
  end
end
