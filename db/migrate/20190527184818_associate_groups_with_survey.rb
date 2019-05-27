class AssociateGroupsWithSurvey < ActiveRecord::Migration[5.2]
  def change
    add_reference :surveys, :groups, foreign_key: true
    add_reference :groups, :survey, foreign_key: true
  end
end
