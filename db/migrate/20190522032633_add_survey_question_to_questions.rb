class AddSurveyQuestionToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_reference :questions, :survey_question, foreign_key: true
  end
end
