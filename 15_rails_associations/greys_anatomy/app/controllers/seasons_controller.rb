class SeasonsController < ApplicationController
  def index
    @seasons = Season.all
  end

  def new
    @season = Season.new
    @characters = Character.all
  end

  def create
    byebug
    @season = Season.create(season_params)

    redirect_to season_path(@season)
  end

  def show
    @season = Season.find(params[:id])
  end

  private

  def season_params
    params.require(:season).permit(:number, person_ids: [])
    # params.require(:season).permit(:number, character_ids: [])
  end
end












#
