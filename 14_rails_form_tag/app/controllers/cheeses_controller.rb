class CheesesController < ApplicationController
  before_action :set_cheese, only: [:show]

  def index
    @cheeses = Cheese.all
  end

  def show
  end

  def new
  end

  def create
    @cheese = Cheese.new(cheese_params)
    if @cheese.save
      redirect_to @cheese
    else
      render cheeses_new
    end
  end

  private

  def set_cheese
    @cheese = Cheese.find(params[:id])
  end

  def cheese_params
    params.require(:cheese).permit(:name, :age, :smelliness)
  end

end
