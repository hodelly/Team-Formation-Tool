class AddVariousFlags < ActiveRecord::Migration[5.2]
  def change
    add_column :responses, :is_submitted, :boolean
    add_column :questions, :is_default, :boolean
    add_column :survey_questions, :is_enabled, :boolean
  end
end
