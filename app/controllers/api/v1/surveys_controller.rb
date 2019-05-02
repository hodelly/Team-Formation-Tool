class Api::V1::SurveysController < ApplicationController
  before_action :require_authentication

  def create
    # create survey but only for instructor
  end

  def destroy
    # delete survey but only for instructor
  end

  def index
    # different renders for instructors vs students? 
    render json: Survey.for_instructor(current_sis_user)
    # also consider for_course_id scope
  end

  def show
    @survey = Survey.find(params[:id])
    render json: @survey
  end

end
