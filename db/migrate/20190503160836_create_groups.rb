class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.float :score
      t.string :sis_user_id
      t.timestamps
    end
  end
end
