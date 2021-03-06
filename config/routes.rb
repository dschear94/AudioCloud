Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


    namespace :api, defaults: {format: :json} do
      resource :user, only: [:create, :update]
      resource :session, only: [:create, :destroy, :show], controller: :session
      resource :entry, only: [:show], controller: :entry
      resources :photos, only: [:create, :index]
      resources :tracks, only: [:create, :index, :show]
      resources :comments, only: [:create, :index, :show, :destroy]
      resources :artists, only: [:show], controller: :users
      resources :likes, only: [:create, :destroy, :index, :show]
      resources :follows, only: [:create, :destroy, :index, :show]
      resources :recent_plays, only: [:create]
      get 'tracks/by_artist/:artist_id', :to => 'tracks#by_artist'
      get 'tracks/by_follows/:artist_id', :to => 'tracks#by_follows'
      get 'tracks/by_recent_plays/:artist_id', :to => 'tracks#by_recent_plays'
      get 'tracks/by_likes/:artist_id', :to => 'tracks#by_likes'
      patch 'likes/pseudo_destroy', :to => 'likes#pseudo_destroy'
      patch 'follows/pseudo_destroy', :to => 'follows#pseudo_destroy'
      patch 'tracks/update_plays/:id', :to => 'tracks#update_plays'
      get 'artists/by_track_comments/:track_id', :to => 'users#by_track_comments'
      get 'artists/by_follows/:user_id', :to => 'users#by_follows'
    end

  root "static_pages#root"
end