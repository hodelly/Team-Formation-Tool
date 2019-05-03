class CreateSurveyQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :survey_questions do |t|
      t.reference :surveys
      t.reference :question
      t.float :weight
      t.reference :responses

      t.timestamps
    end
  end
end
