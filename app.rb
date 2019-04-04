require 'sinatra/base'
require 'sinatra/json'
require_relative 'data_mapper_setup'
require 'json'

class Server < Sinatra::Base
  set :root, File.dirname(__FILE__)

  get '/' do
    File.read('index.html')
  end

  post '/temp' do
    content_type :json    
  end

  get '/temp' do

  end

  run! if app_file == $0

end