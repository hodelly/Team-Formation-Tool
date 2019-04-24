class SurveyQuestion < ApplicationRecord
    belongs_to :survey 
    belongs_to :question # how to associate with 2 other tables?
    validates :weight # float value?
    has_many :response
end