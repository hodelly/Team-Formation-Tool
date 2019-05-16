class SurveyQuestion < ApplicationRecord
  belongs_to :survey
  has_one :question
  validates :weight, presence: true, numericality: true
  has_many :responses
  validates :is_enabled, inclusion: { in: [true, false] }

  def self.create_survey_question_and_question(params)
    sq = new
    sq.question.create(question_title: params[:question_title]
                       question_type: params[:question_type], 
                       response_values: params[:response_values],
                       is_default: params[:is_default] == 'true')
    sq.weight = params[:weight].to_f
    sq.is_enabled = params[:is_enabled] == 'true'
  end
end