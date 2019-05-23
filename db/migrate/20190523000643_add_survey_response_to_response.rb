class AddSurveyResponseToResponse < ActiveRecord::Migration[5.2]
  def change
    add_reference :responses, :survey_response, foreign_key: true
  end
end
