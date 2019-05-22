class Api::V1::SurveysController < ApplicationController
  before_action :require_authentication

  def create
    # create survey, instructor only
    # TODO: add check to ensure only instructors have access to this end point
    @survey = Survey.create_from_params(survey_params)
    @survey_questions = SurveyQuestion.create_from_params(params[:survey_questions])
    @survey.survey_questions << @survey_questions

    respond_to do |format|
      if @survey.save
        format.json { render json: @survey, status: :created, location: @survey }
      else
        format.json { render json: @survey.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    # delete survey, instructor only
  end

  def index
    # TODO: different renders for instructors vs students? 
    render json: Survey.for_instructor(current_sis_user)
    # TODO: also consider for_course_id scope for students
  end

  def show
    @survey = Survey.find(params[:id])
    respond_to do |format|
      format.json { render json: @survey.to_json(:include => [:questions]), status: :ok}
    end
  end

  private 

  # validate params
  def survey_params
    params.require(:survey).permit(:course_id, :sis_instructor_id, :group_size, 
                                   :due_date, :title, :description, 
                                   :note_from_instructor, :is_published)
  end

end
