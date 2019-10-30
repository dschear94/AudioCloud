Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


    namespace :api, defaults: {format: :json} do
      resource :user, only: [:create]
      resource :session, only: [:create, :destroy, :show], controller: :session
      resource :entry, only: [:show], controller: :entry
      resources :photos, only: [:create, :index]
      resources :tracks, only: [:create, :index, :show]
      resources :comments, only: [:create, :index, :show]
      resources :artists, only: [:show], controller: :users
    end

  root "static_pages#root"
end
