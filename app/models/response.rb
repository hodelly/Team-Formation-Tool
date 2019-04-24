class Response < ApplicationRecord
    belongs_to :survey_question
    validates :sis_user_id
    validates :value 
end