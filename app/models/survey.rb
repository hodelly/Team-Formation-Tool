class Survey < ApplicationRecord
    validates :course_id, presence: true
    has_many :questions
    has_many :sis_instructor_id
    validates :groupSize
    date :dueDate
end