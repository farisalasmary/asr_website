require_relative "rails_helper"

RSpec.describe FileUploaderController, type: :controller do
  describe "GET index" do
    it "returns a 200" do
      get :show
      expect(response).to render_template(:new)
    end
  end
end
