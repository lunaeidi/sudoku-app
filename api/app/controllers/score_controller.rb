class ScoreController < ApplicationController
  #the logic for signing in goes here.
  def create

    Score.create( )
  end
  def index
    render json: @user, status: 200
  end
end
