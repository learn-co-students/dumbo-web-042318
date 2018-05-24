class BrewsController < ApplicationController
  before_action :find_brew, only: [:show, :edit, :update]

  def index
    @brews = Brew.all
  end

  def show

  end

  def new
    @brew = Brew.new()
  end

  def create
    @brew = Brew.new(brew_params)
    if @brew.save
      byebug
      redirect_to brew_path(@brew)
    else
      render 'new'
    end
  end

  def edit
    @brew = Brew.find(params[:id])
  end

  def update
    if @brew.update(brew_params)
      redirect_to brew_path(@brew)
    else
      render 'edit'
    end
  end

  def strongest
    @strongest_brews = Brew.strongest
  end

  private

  def find_brew
    @brew = Brew.find(params[:id])
  end

  def brew_params
    params.require(:brew).permit(:blend_name,:origin,:notes,:strength)
  end

end
