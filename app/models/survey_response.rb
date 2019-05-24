class SurveyResponse < ApplicationRecord
    belongs_to :survey
    validates :sis_user_id, presence: true, length: { maximum: 32 }
    has_many :responses
    validates :is_submitted, inclusion: { in: [true, false] }

    def self.create_from_params(params)
      sr = new
      sr.sis_user_id = params[:sis_user_id]
      sr.is_submitted = params[:is_submitted] == 'true'
      if params[:responses]
        for response in params[:responses]
          r = Response.create(sis_user_id: params[:sis_user_id],
                              value: response[:value])
          sq = SurveyQuestion.find(response[:survey_question_id])
          sq.responses << r 
          sr.responses << r
        end
      end
      sr
    end
  end