class ScoresController < ApplicationController
  #the logic for signing in goes here.
  def create
#app needs to make a post request to /scores
    Score.create( )
  end
  def index
    @scores= Score.all
    render json: @score, status: 200
#     respond_to do |format|
#   format.html { render :show }
#   format.json { render json: @score}
# end
  end
end
