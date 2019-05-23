class Api::V1::SurveyResponsesController < ApplicationController
    before_action :require_authentication
  
    def create
      # submit a survey response (should only be used by students)
    end
  
    def index
      # render this specific student's survey responses (for all surveys)
      # currently for debugging
      render json: canvas_data
    end
  
    def show
      # load a specific survey response
    end
  end