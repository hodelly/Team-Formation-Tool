class Survey < ApplicationRecord
    validates :course_id, presence: true
    has_many :survey_questions
    has_many :questions through :survey_questions # verify syntax
    serialized :sis_instructor_id 
    validates :group_size # add prop to check attribute type
    date :due_date 
end