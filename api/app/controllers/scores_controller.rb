require 'pry'
class ScoresController < ApplicationController
  #the logic for signing in goes here.
  def create
#app needs to make a post request to /scores
    Score.create(value: params[:value], name:params[:name], likes:0 )

  end
  def show
    @score= Score.find(params[:id])
    render json: @score, status:200
  end
  def update
      #need to do .update if already exists ?
      score= Score.find(params[:id])
      if score.update(likes:params[:likes])
        render json: score, status:200
      end
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
