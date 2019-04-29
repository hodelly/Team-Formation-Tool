class Group < ApplicationRecord
    validates :score, presence: true, length: { maximum: 32 }, numericality: true
    serialize :sis_user_id, presence: true, length: { maximum: 32 }
end