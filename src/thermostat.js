'use strict';

function Thermostat () {
  this._temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this._powerSaving = true;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this._maxTemp = this.MAX_TEMP_PSM_ON;
};

Thermostat.prototype.up = function () {
  if (this._temperature < this._maxTemp) {
    this._temperature++;
  }
};

Thermostat.prototype.down = function() {
  if (this._temperature > this.MINIMUM_TEMPERATURE) {
    this._temperature--;
  } 
};

Thermostat.prototype.togglePowerSaving = function () {
  if (this.isPowerSavingOn()) {
    this._powerSaving = false;
    this._maxTemp = this.MAX_TEMP_PSM_OFF;
  } else {
    this._powerSaving = true;
    this._maxTemp = this.MAX_TEMP_PSM_ON;
    if (this._temperature > 25 ) { thermostat.reset() };
  };
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this._powerSaving;
};

Thermostat.prototype.reset = function () {
  this._temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  let temperature = this._temperature;
  switch (true) {
    case temperature < 18:
      return 'low-usage';
      break;
    case temperature < 25:
      return 'medium-usage';
      break;
    default:
      return 'high-usage';
      break;
  }
};

Thermostat.prototype.value = function () {
  return this._temperature
}

var thermostat = new Thermostat();