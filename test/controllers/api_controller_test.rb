require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get sessions" do
    get api_sessions_url
    assert_response :success
  end

end
