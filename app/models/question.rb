class Question < ApplicationRecord
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE'.freeze
  CHECKBOX = 'CHECKBOX'.freeze
  SHORT_ANSWER = 'SHORT_ANSWER'.freeze

  QUESTION_TYPES = [
    MULTIPLE_CHOICE, CHECKBOX, SHORT_ANSWER
  ].freeze
  validates :question_title, presence: true
  serialize :response_values, JSON # for multiple choice and checkbox
  validates :question_type, presence: true, length: { maximum: 32 }, inclusion: { in: QUESTION_TYPES }
  validates :is_default, inclusion: { in: [true, false] }
end