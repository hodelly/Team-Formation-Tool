class CreateSurveyQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :survey_questions do |t|
      t.references :survey
      t.references :question
      t.float :weight
      t.references :responses

      t.timestamps
    end
  end
end
