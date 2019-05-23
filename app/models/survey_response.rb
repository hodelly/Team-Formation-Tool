class SurveyResponse < ApplicationRecord
    belongs_to :survey
    validates :sis_user_id, presence: true, length: { maximum: 32 }
    has_many :responses
    validates :is_submitted, inclusion: { in: [true, false] }

    def self.create_from_params(params)
      sr = new
      # TODO change this!!
      s.course_id = params[:course_id]
      s.sis_instructor_id = params[:sis_instructor_id]
      s.title = params[:title]
      s.is_published = params[:is_published] == 'true'
      s.description = params[:description] || ''
      s.note_from_instructor = params[:note_from_instructor] || ''
      s.group_size = params[:group_size].to_i
      s.due_date = Time.at(params[:due_date].to_f/1000)
      sr
    end
  end