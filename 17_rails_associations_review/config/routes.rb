Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/brews/strongest', to: 'brews#strongest', as: 'strongest'

  resources :brews
  resources :purchases, only: [:new, :create, :show]

end
