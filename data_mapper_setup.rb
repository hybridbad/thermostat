require 'rubygems'
require 'data_mapper'
require 'dm-postgres-adapter'

DataMapper.setup(:default, 'postgres://localhost/thermostat')

DataMapper.finalize
DataMapper.auto_upgrade!