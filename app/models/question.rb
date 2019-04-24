class Question < ApplicationRecord
    has_many :response_values
    validates :type # add equivalent of enum here
end