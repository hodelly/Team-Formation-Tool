class Group < ApplicationRecord
    validates :score, presence: true, length: { maximum: 32 }, numericality: true
    validates :sis_user_id, presence: true, length: { maximum: 32 }
    serialize :sis_user_id, JSON
end