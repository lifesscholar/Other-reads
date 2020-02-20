Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :shelves, only: [:create, :destroy, :show, :update, :index]
    resources :shelved_books, only: [:create, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :show]
  end

  root "static_pages#root"
end
