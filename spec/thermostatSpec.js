

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
      expect(thermostat._minTemp).toBe(10);
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
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function(i) {
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

});