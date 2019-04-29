class Group < ApplicationRecord
    validates :score
    serialized :sis_user_id # will be a serialized field, but is foreign key
end