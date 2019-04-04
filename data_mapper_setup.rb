require 'data_mapper'

DataMapper.setup(:default, 'postgres://localhost/thermostat')

DataMapper.finalize
DataMapper.auto_upgrade!
