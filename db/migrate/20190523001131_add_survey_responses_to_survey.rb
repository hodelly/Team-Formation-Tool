class AddSurveyResponsesToSurvey < ActiveRecord::Migration[5.2]
  def change
    add_reference :surveys, :survey_responses, foreign_key: true
  end
end
