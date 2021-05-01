require 'rails_helper'

RSpec.describe "FileUploaderControllers", type: :request do

  describe "GET index" do
    it "returns a 200" do
      get '/'
      expect(response).to render_template(:index)
    end
  end
    
  describe "GET upload" do
    it "should redirect to /" do
      get '/upload'
      expect(response).to redirect_to(url_for('/'))
    end
  end

#  describe "POST upload" do
#    it "should Upload to /upload" do
#      post '/upload'
#      expect(response).to redirect_to(url_for('/'))
#    end
#  end
end
