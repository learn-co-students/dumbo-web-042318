class BrewsController < ApplicationController
  # controller lifecycle method
  before_action :set_brew, only: [:show, :edit, :update, :destroy]

  def index
    @brews = Brew.all
  end

  def show
  end

  def new
    @brew = Brew.new
  end

  def create
    @brew = Brew.new(brew_params)

    # is this brew valid?
    if @brew.valid?
      @brew.save
      redirect_to @brew # redirect_to brew_path(@brew)
    else
      # flash error message
      render "new"
    end
  end

  def edit
    # render 'edit'
  end

  def update
    @brew.update(brew_params)
    redirect_to @brew # redirect_to brew_path(@brew)
  end

  def destroy
    @brew.destroy
    redirect_to brews_path
  end

  def coolest_action
    @brews = Brew.strongest_blends
  end

  private

  def set_brew
    @brew = Brew.find(params[:id])
  end

  def brew_params
    params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
  end
end



###
