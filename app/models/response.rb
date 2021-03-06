class Response < ApplicationRecord
  belongs_to :survey_question
  belongs_to :survey_response
  validates :sis_user_id, presence: true, length: { maximum: 32 }
  validates :value, presence: true
end