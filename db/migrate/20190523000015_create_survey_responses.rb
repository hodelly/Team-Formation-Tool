class CreateSurveyResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :survey_responses do |t|
      t.references :survey
      t.references :survey_questions
      t.string :sis_user_id
      t.boolean :is_submitted

      t.timestamps
    end
  end
end
