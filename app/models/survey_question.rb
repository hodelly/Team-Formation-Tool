class SurveyQuestion < ApplicationRecord
  belongs_to :survey
  has_one :question
  validates :weight, presence: true, numericality: true
  has_many :responses
  validates :is_enabled, inclusion: { in: [true, false] }
end