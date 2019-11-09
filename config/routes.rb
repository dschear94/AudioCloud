Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


    namespace :api, defaults: {format: :json} do
      resource :user, only: [:create, :update]
      resource :session, only: [:create, :destroy, :show], controller: :session
      resource :entry, only: [:show], controller: :entry
      resources :photos, only: [:create, :index]
      resources :tracks, only: [:create, :index, :show]
      resources :comments, only: [:create, :index, :show]
      resources :artists, only: [:show], controller: :users
      resources :likes, only: [:create, :destroy, :index, :show]
      resources :follows, only: [:create, :destroy, :index, :show]
      get 'tracks/by_artist/:artist_id', :to => 'tracks#by_artist'
      get 'tracks/by_follows/:artist_id', :to => 'tracks#by_follows'
      get 'tracks/by_likes/:artist_id', :to => 'tracks#by_likes'
      patch 'likes/pseudo_destroy', :to => 'likes#pseudo_destroy'
      patch 'tracks/update_plays/:id', :to => 'tracks#update_plays'
    end

  root "static_pages#root"
end