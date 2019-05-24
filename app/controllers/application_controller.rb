class ApplicationController < ActionController::Base
  ## Comes in here
      # session[:canvas_auth_id] = canvas_auth.session_code
  protect_from_forgery with: :null_session

  # Authentication methods
  def authenticated?
    true
    # TODO: Uncomment this when we are ready for handoff
    # session[:canvas_code].present? (possible canvas integration)
    # session[:netid].present? && current_sis_user.present?
  end

  # Returns user netid
  def current_sis_user
    @current_sis_user ||= '0'
    # TODO: Uncomment this when we are ready for handoff
    # @current_sis_user ||= session[:netid] # TODO: Canvas capatibility
  end

  def require_authentication
    unless authenticated?
      session[:return_url] = request.url
      redirect_to '/auth/cas'
    end
  end

  def canvas_data
    canvas = CanvasResolver.resolve(:canvas)
    ## Question: This is null. Am I auppose to be able to get a value from this or should I be using the mocks?
    course_id = 34590
    # Also saying that canvas_bulk_hash doesnt exist but I am not sure why?
    @canvas_data = canvas.canvas_bulk_hash(course_id)
  end 
end
