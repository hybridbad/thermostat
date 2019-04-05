require 'sinatra/base'
require 'sinatra/json'
require_relative 'thermostat_data'
require_relative 'data_mapper_setup'

class Server < Sinatra::Base
  set :root, File.dirname(__FILE__)
  set :public_folder, File.dirname(__FILE__)

  enable :sessions

  get '/' do
    erb :index
  end

  get '/temp' do
    content_type :json
    ThermostatData.get(1).to_json 
  end

  run! if app_file == $0

end