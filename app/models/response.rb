class Response < ApplicationRecord
  belongs_to :survey_question
  validates :sis_user_id, presence: true, length: { maximum: 32 }
  validates :value, presence: true
  validates :is_submitted, inclusion: { in: [true, false] }
end