Rails.application.routes.draw do

  # root 'cats#index'

  # # Example of a 'normal route'
  get 'about' => 'cats#index'

  # # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cats

end
