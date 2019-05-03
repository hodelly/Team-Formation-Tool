class CreateSurveys < ActiveRecord::Migration[5.2]
  def change
    create_table :surveys do |t|
      t.string :course_id
      t.references :survey_questions
      t.string :sis_instructor_id
      t.integer :group_size
      t.datetime :due_date
      t.timestamps
    end
  end
end
