class RemovingColumnsSurveysAndResponses < ActiveRecord::Migration[5.2]
  def change
    remove_column :surveys, :note_from_instructor
    remove_column :responses, :is_submitted
  end
end
