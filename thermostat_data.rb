require 'data_mapper'

class Thermostat
  include DataMapper::Resource

  property :id,               Serial
  property :temperature,      Integer
  property :psmstatus,        Boolean
  
end