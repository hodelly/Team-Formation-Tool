class Api::V1::SurveyResponsesController < ApplicationController
    before_action :require_authentication
  
    def create
      # submit a survey response (should only be used by students)
      @sr = SurveyResponse.create_from_params(params[:responses])
      @survey = Survey.find(params[:survey_id])
      @survey.survey_responses << @sr

      respond_to do |format|
        if @sr.save
          format.json { render json: @sr, status: :created }
        else
          format.json { render json: @sr.errors, status: :unprocessable_entity }
        end
      end
    end
  
    def index
      # render this specific student's survey responses (for all surveys)
      # currently for debugging
      render json: canvas_data
    end
  
    def show
      @survey = Survey.find(params[:survey_id]) # should it be in the link?
      @survey_response = @survey.survey_response.fine(curr_sis_user)
      respond_to do |format|
        format.json { render json: @survey_response.to_json(:include => [:responses]), status: :ok}
      end
    end
  end