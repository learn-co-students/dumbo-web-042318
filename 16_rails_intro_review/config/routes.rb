Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/brews', to: 'brews#index'
  get '/brews/strongest', to: 'brews#coolest_action'
  resources :brews# do
    # get '/strongest', to: 'brews#strongest' # WAIT!
  #end
end
