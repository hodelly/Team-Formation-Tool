class Survey < ApplicationRecord
  validates :course_id, presence: true, length: { maximum: 32 }
  has_many :survey_questions
  has_many :questions, :through => :survey_questions # TODO: what's hash syntax?
  serialize :sis_instructor_id, presence: true, length: { maximum: 32 }
  validates :group_size, presence: true, numericality: { only_integer: true }
  date :due_date, presence: true, # TODO: how to validate dates?
end