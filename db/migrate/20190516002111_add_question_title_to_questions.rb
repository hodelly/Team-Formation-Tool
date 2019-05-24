class AddQuestionTitleToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :question_title, :string
  end
end
