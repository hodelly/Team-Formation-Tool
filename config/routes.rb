Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do
      resource :sis_user, only: :show
      resources :surveys, only: [:create, :destroy]
    end
  end
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
