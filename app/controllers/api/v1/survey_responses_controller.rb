class Api::V1::SurveyResponsesController < ApplicationController
    before_action :require_authentication
  
    def create
      # submit a survey response (should only be used by students)
      @sr = SurveyResponse.create_from_params(params)
      @survey = Survey.find(params[:survey_id])
      @survey.survey_responses << @sr

      if @sr.save
        render json: @sr, status: :created 
      else
        render json: @sr.errors, status: :unprocessable_entity 
      end
    end
  
    def index
      # what should this be?? swap it with the function underneath??
      render json: SurveyResponse.all.to_json(:include => [:responses])
    end
  
    def show
      @survey = Survey.find(params[:survey_id]) # should it be in the link?
      @survey_response = @survey.survey_response.fine(curr_sis_user)
      render json: @survey_response.to_json(:include => [:responses]), status: :ok
    end
  end