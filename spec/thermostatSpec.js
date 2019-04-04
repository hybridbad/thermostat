'use strict';

describe('#feature test', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('new thermostat', function(){
    it('starts at 20 degrees', function(){
      expect(thermostat._temperature).toBe(20);
    });
    it('have a min temp of 10', function(){
      expect(thermostat.MINIMUM_TEMPERATURE).toBe(10);
    });
    it('powersaving mode on', function(){
      expect(thermostat._powerSaving).toBe(true);
    });
  });

  describe('has an up function', function(){
    it('that increases the temperature', function(){
      [1, 2, 3, 4, 5].forEach(function(i) {
        thermostat.up();
      })
      expect(thermostat._temperature).toBe(25);
    });
    it('cannot exceed max temparature', function(){
      expect(thermostat._maxTemp).toBe(25);
      [1, 2, 3, 4, 5, 6].forEach(function(i) {
        thermostat.up();
      })
      expect(thermostat._temperature).toBe(25);
    });
  });

  describe('has an down function', function(){
    it('that decreases the temperature', function(){
      [1, 2, 3, 4, 5].forEach(function(i) {
        thermostat.down();
      })
      expect(thermostat._temperature).toBe(15);
    });

    it('min temperature is 10', function(){
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach(function(i) {
        thermostat.down();
      })
      expect(thermostat._temperature).toBe(10);
    });
  });

  describe('power saving switch', function(){
    it('changes the state of power saving', function(){
      thermostat.togglePowerSaving();
      expect(thermostat._powerSaving).toBe(false);
    });
  });

  describe('reset temperature', function(){
    it('changes the temperature to 20', function(){
      thermostat.reset();
      expect(thermostat._temperature).toBe(20);
    });
  });

  describe('energy usage', function(){
    it('returns low when temp is less than 18', function(){
      thermostat._temperature = 17;
      expect(thermostat.energyUsage()).toBe('low-usage');
    });
    it('returns medium when temp is less than 25', function(){
      thermostat._temperature = 23;
      expect(thermostat.energyUsage()).toBe('medium-usage');
    });
    it('returns high when temp is more than 25', function(){
      thermostat._temperature = 27;
      expect(thermostat.energyUsage()).toBe('high-usage');
    });
  });

});