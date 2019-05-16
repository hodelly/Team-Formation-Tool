class Survey < ApplicationRecord
  validates :course_id, presence: true, length: { maximum: 32 }
  validates :title, presence: true
  attribute :description 
  attribute :note_from_instructor
  has_many :survey_questions
  has_many :questions, through: :survey_questions
  validates :sis_instructor_id, presence: true # how to mark this as serialize ??
  serialize :sis_instructor_id, JSON
  validates :group_size, presence: true, numericality: { only_integer: true }
  validates :due_date, presence: true, numericality: true
  validates :is_published, inclusion: { in: [true, false] }

  scope :for_instructor, (lambda do |sis_instructor_id|
    where(sis_instructor_id: sis_instructor_id) # TODO: what about a serialized id though
  end)

  scope :for_course_id, (lambda do |course_id|
    where(course_id: course_id) 
  end)

  def self.create_associated_survey_questions(questions)
    puts questions
    for question in questions
      self.survey_questions.create_survey_question_and_question(question)
    end
  end

  def self.create_from_params(params)
    s = new
    s.course_id = params[:course_id]
    s.sis_instructor_id = params[:sis_instructor_id]
    s.title = params[:title]
    s.is_published = params[:is_published] == 'true'
    s.description = params[:description] || ''
    s.note_from_instructor = params[:note_from_instructor] || ''
    create_associated_survey_questions(params[:survey_questions])
    s.group_size = params[:group_size].to_i
    s.due_date = Time.at(params[:due_date].to_f/1000)
    s
  end
end
