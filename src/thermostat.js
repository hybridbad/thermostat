function Thermostat () {
  this._temperature = 20;
  this._minTemp = 10;
  this._powerSaving = true;
  this._maxTemp = 25;
};

Thermostat.prototype.up = function () {
  if (this._temperature >= this._maxTemp) {
    this._temperature = this._maxTemp;
    console.log('Maximum temperature ' + this._maxTemp);
  } else {
    this._temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this._temperature === this._minTemp) {
    this._temperature = this._minTemp;
    console.log('Minimum temperature is 10!');
  } else {
    this._temperature -= 1;
  }
  return this._temperature;
};

Thermostat.prototype.togglePowerSaving = function () {
  if (this._powerSaving === true) {
    this._powerSaving = false;
    this._maxTemp = 32;
  } else {
    this._powerSaving = true;
    this._maxTemp = 25;
  }
}

// Thermostat.prototype._isPowerSavingOn = function () {
//   return this._powerSaving
// };
