# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_15_024243) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "groups", force: :cascade do |t|
    t.float "score"
    t.string "sis_user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "questions", force: :cascade do |t|
    t.string "response_values"
    t.string "question_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_default"
  end

  create_table "responses", force: :cascade do |t|
    t.bigint "survey_question_id"
    t.string "sis_user_id"
    t.string "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_submitted"
    t.index ["survey_question_id"], name: "index_responses_on_survey_question_id"
  end

  create_table "survey_questions", force: :cascade do |t|
    t.bigint "survey_id"
    t.bigint "question_id"
    t.float "weight"
    t.bigint "responses_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_enabled"
    t.index ["question_id"], name: "index_survey_questions_on_question_id"
    t.index ["responses_id"], name: "index_survey_questions_on_responses_id"
    t.index ["survey_id"], name: "index_survey_questions_on_survey_id"
  end

  create_table "surveys", force: :cascade do |t|
    t.string "course_id"
    t.bigint "survey_questions_id"
    t.string "sis_instructor_id"
    t.integer "group_size"
    t.datetime "due_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "title"
    t.boolean "is_published"
    t.string "description"
    t.string "note_from_instructor"
    t.index ["survey_questions_id"], name: "index_surveys_on_survey_questions_id"
  end

end
