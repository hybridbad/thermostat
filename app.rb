require 'sinatra/base'
require 'sinatra/json'
require_relative 'thermostat_data'
require_relative 'data_mapper_setup'

class Server < Sinatra::Base
  set :root, File.dirname(__FILE__)
  set :public_folder, File.dirname(__FILE__)

  get '/' do
    erb :index
  end

  post '/temp' do
    content_type :json
    data = ThermostatData.get(1)
    ThermostatData.update(temperature: params[:temperature], psmstatus: params[:psmstatus])
  end

  get '/temp' do
    content_type :json
    ThermostatData.get(1).to_json 
  end

  run! if app_file == $0

end