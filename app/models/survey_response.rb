class SurveyResponse < ApplicationRecord
    belongs_to :survey
    validates :sis_user_id, presence: true, length: { maximum: 32 }
    has_many :responses
    validates :is_submitted, inclusion: { in: [true, false] }
  end