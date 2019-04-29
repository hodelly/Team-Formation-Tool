class SurveyQuestion < ApplicationRecord
  belongs_to :survey
  has_one :question 
  validates :weight, presence: true, numericality: true
  has_many :response
end