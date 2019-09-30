Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create]
    resources :genres, only: [:index, :show]
    resources :show_genres, only: [:index]
    resources :shows, only: [:index, :show]
    resources :my_lists, only: [:create, :destroy]
    resources :search, only: [:index]
    resources :profiles, only: [:create, :show, :update, :destroy, :index]

  end
end
