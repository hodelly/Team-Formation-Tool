class RemoveIsEnabledInSurveyQuestions < ActiveRecord::Migration[5.2]
  def change
    remove_column :survey_questions, :is_enabled
  end
end
