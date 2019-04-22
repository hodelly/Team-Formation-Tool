class Survey < ApplicationRecord
    validates :course_id, presence: true
    validates :groupSize
end