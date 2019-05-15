#var certOptions = {
#  key: fs.readFileSync(path.resolve('build/cert/server.key')),
#  cert: fs.readFileSync(path.resolve('build/cert/server.crt'))
#}

#var app = express()

#var server = https.createServer(certOptions, app).listen(443)

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
end
