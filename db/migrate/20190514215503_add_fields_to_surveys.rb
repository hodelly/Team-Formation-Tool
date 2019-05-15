class AddFieldsToSurveys < ActiveRecord::Migration[5.2]
  def change
    add_column :surveys, :title, :string
    add_column :surveys, :is_published, :boolean
    add_column :surveys, :description, :string
    add_column :surveys, :note_from_instructor, :string
  end
end
