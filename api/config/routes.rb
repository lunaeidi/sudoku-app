Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #need routes to make the fetch requests to... should they be .json routes ?
  #when someone signs up/logs in, want to get save/confirm their info to db

resources :scores, only: [:index,:create,:update,:show]
end
