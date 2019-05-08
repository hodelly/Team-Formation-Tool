class Survey < ApplicationRecord
  validates :course_id, presence: true, length: { maximum: 32 }
  has_many :survey_questions
  has_many :questions, through: :survey_questions
  validates :sis_instructor_id, presence: true # how to mark this as serialize ??
  validates :group_size, presence: true, numericality: { only_integer: true }
  validates :due_date, presence: true, numericality: true

  scope :for_instructor, (lambda do |sis_instructor_id|
    where(sis_instructor_id: sis_instructor_id) # TODO: what about a serialized id though
  end)

  scope :for_course_id, (lambda do |course_id|
    where(course_id: course_id) 
  end)
end
