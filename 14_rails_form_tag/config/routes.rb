Rails.application.routes.draw do
  resources :cheeses
  # get '/cheeses', to: 'cheeses#index', as: 'cheeses'
  # get '/cheeses/new', to: 'cheeses#new', as: 'cheeses_new'
  # get '/cheeses/:id', to: 'cheeses#show', as: 'cheese'
  # post '/cheeses', to: 'cheeses#create'

end
