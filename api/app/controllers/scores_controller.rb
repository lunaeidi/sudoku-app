class ScoresController < ApplicationController
  #the logic for signing in goes here.
  def create
#app needs to make a post request to /scores
    Score.create(value: params[:username], name:params[:name] )
  end
  def index
    @scores= Score.all
    render json: @scores, status: 200
#     respond_to do |format|
#   format.html { render :show }
#   format.json { render json: @score}
# end
  end
end
