Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resource :sis_user, only: :show
      resources :surveys, only: [:create, :destroy, :index, :show]
    end
  end
  get 'hello_world/index'
  root 'hello_world#index'
  get '*path', to: 'hello_world#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
