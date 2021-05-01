Rails.application.routes.draw do
    root 'file_uploader#index'
    get 'upload', to: redirect('/')
    post 'upload' => 'file_uploader#upload'
    get 'download/:id', to: 'file_uploader#download'
end
