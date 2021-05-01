require "rails_helper"

RSpec.describe FileUploaderController, type: :controller do
  describe "GET index" do
    it "returns a 200" do
      request.headers["Authorization"] = "foo"
      get :show
      expect(response).to render_template(:new)
    end
  end
end
