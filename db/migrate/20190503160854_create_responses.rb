class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.references :survey_question
      t.string :sis_user_id
      t.string :value

      t.timestamps
    end
  end
end
