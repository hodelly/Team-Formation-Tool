class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  # Authentication methods
  def authenticated?
    true
    # session[:canvas_code].present? (possible canvas integration)
    # TODO: Uncomment this when we are ready for handoff
    # session[:netid].present? && current_sis_user.present?
  end

  def current_sis_user # returns netid of user
    @current_sis_user ||= '1' #??
    # TODO: Uncomment this when we are ready for handoff
    # @current_sis_user ||= session[:netid]
  end

  def require_authentication
    unless authenticated?
      session[:return_url] = request.url
      redirect_to '/auth/cas'
    end
  end
end
