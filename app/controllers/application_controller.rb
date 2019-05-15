require 'oauth'
require 'oauth/request_proxy/action_controller_request'

$oauth_key = "test"
$oauth_secret = "secret"
require 'net/https'


#var certOptions = {
#  key: fs.readFileSync(path.resolve('build/cert/server.key')),
#  cert: fs.readFileSync(path.resolve('build/cert/server.crt'))
#}

#var app = express()

#var server = https.createServer(certOptions, app).listen(443)

class ApplicationController < ActionController::Base
  ## Comes in here
  def get_canvas_auth
    ## comes in here

  #  $certOptions = {
    #   fs.readFileSync(path.resolve('build/cert/server.key'))
  #     fs.readFileSync(path.resolve('build/cert/server.crt'))
  #  }

  h = Net::HTTP.new("localhost", 443)
  h.use_ssl = true
  h.ssl_version = :SSLv3
  h.verify_mode = OpenSSL::SSL::VERIFY_PEER
  h.get "3000"

    begin
      signature = OAuth::Signature.build(request, :consumer_secret => $oauth_secret)
      puts signature
      signature.verify() or raise OAuth::Unauthorized
    rescue OAuth::Signature::UnknownSignatureMethod,
       ##comes in here
       OAuth::Unauthorized
       return %{unauthorized attempt. make sure you used the consumer secret "#{$oauth_secret}"}
     end

     ##does not print out here
     puts "hi"
      # make sure this is an assignment tool launch, not another type of launch.
      # only assignment tools support the outcome service, since only they appear
      # in the Canvas gradebook.
      # unless params['lis_outcome_service_url'] && params['lis_result_sourcedid']
      #  return %{It looks like this LTI tool wasn't launched as an assignment, or you are trying to take it as a teacher rather than as a a student. Make sure to set up an external tool assignment as outlined <a target="_blank" href="https://github.com/instructure/lti_example">in the README</a> for this example.}
      # end

      %w(lis_outcome_service_url lis_result_sourcedid lis_person_name_full lis_person_contact_email_primary).each { |v| session[v] = params[v] }

  end
      # canvas_auth = CanvasAuth.new
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
