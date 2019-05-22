class SurveyQuestion < ApplicationRecord
  belongs_to :survey
  has_one :question
  validates :weight, presence: true, numericality: true
  has_many :responses
  validates :is_enabled, inclusion: { in: [true, false] }

  accepts_nested_attributes_for :question

  def self.create_survey_question_and_question(params)
    sq = new
    q = Question.create(question_title: params[:question_title],
                       question_type: params[:question_type], 
                       response_values: params[:response_values],
                       is_default: params[:is_default] == 'true')
    sq.question = q
    sq.weight = params[:weight].to_f
    sq.is_enabled = params[:is_enabled] == 'true'
    sq
  end

  def self.create_from_params(survey_questions)
    sqs = []
    if survey_questions
      for question in survey_questions
        sqs << create_survey_question_and_question(question)
      end
    end
    sqs
  end
end