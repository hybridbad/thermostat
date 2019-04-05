require 'sinatra/base'
require 'sinatra/json'
require_relative 'thermostat_data'
require_relative 'data_mapper_setup'

class Server < Sinatra::Base
  set :root, File.dirname(__FILE__)

  enable :sessions

  get '/' do
    File.read('index.html')
  end

  post '/temp' do
    
  end

  get '/temp' do
    content_type :json
    thermostat = Thermostat.get(1).to_json
  end

  run! if app_file == $0

end