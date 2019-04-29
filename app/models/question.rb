class Question < ApplicationRecord
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE'
  CHECKBOX = 'CHECKBOX'
  SHORT_ANSWER = 'SHORT_ANSWER'
  PARAGRAPH = 'PARAGRAPH'

  QUESTION_TYPES = [
    MULTIPLE_CHOICE, CHECKBOX, SHORT_ANSWER, PARAGRAPH
  ].freeze
  serialize :response_values # for multiple choice and checkbox
  validates :question_type, presence: true, length: { maximum: 32 }, inclusion: { in: QUESTION_TYPES }
end