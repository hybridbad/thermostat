require 'data_mapper'

class ThermostatData
  include DataMapper::Resource

  property :id,               Serial
  property :temperature,      Integer
  property :psmstatus,        Boolean
  
end