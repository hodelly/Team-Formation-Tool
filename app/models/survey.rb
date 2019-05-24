class Survey < ApplicationRecord
  validates :course_id, presence: true, length: { maximum: 32 }
  validates :title, presence: true
  attribute :description 
  has_many :survey_questions
  has_many :questions, through: :survey_questions
  validates :sis_instructor_id, presence: true 
  serialize :sis_instructor_id, JSON
  validates :group_size, numericality: { only_integer: true }
  validates :due_date, presence: true, numericality: true
  validates :is_published, inclusion: { in: [true, false] }
  has_many :survey_responses

  accepts_nested_attributes_for :survey_questions

  scope :for_instructor, (lambda do |sis_instructor_id|
    where(sis_instructor_id: sis_instructor_id) # TODO: what about a serialized id though
  end)

  scope :for_course_id, (lambda do |course_id|
    where(course_id: course_id) 
  end)

  def num_responses
    survey_responses.size
  end

  def as_json(options={})
    if true # is_instructor? TODO: find out best practice for working with user type
      super(:only => [:id, :course_id, :title, :description, :group_size, :due_date],
            :methods => [:num_responses],
            :include => [:questions, :survey_responses]
      )
    else
      super(:only => [:course_id, :title, :description, :group_size, :due_date],
            :methods => [:num_responses],
            :include => [:questions]
      )
    end
  end

  def self.create_from_params(params)
    s = new
    s.course_id = params[:course_id]
    s.sis_instructor_id = params[:sis_instructor_id]
    s.title = params[:title]
    s.is_published = params[:is_published] == 'true'
    s.description = params[:description] || ''
    s.group_size = params[:group_size] ? params[:group_size].to_i : 0
    s.due_date = Time.at(params[:due_date].to_f/1000)
    s
  end
end
