class Api::V1::SurveysController < ApplicationController
  before_action :require_authentication

  def create
    # create survey but only for instructor
    # Survey.create(params[:survey]) # TODO: is survey one field or all params?
    # @survey = Survey.new(survey_params)
    @survey = Survey.create_from_params(survey_params)

    respond_to do |format|
      if @survey.save
        format.json { render json: @survey, status: :created, location: @survey }
      else
        format.json { render json: @survey.errors, status: :unprocessable_entity }
      end
    end
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

  private 

  # validate params?
  def survey_params
    params.require(:survey).permit(:course_id, :survey_questions, 
      :sis_instructor_id, :group_size, :due_date)
  end

end
