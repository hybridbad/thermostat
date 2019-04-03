'use strict';

function Thermostat () {
  this._temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this._powerSaving = true;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this._maxTemp = this.MAX_TEMP_PSM_ON;
  this._powerSavingStatus = 'Power Saving is On';
};

Thermostat.prototype.up = function () {
  if (this._temperature >= this._maxTemp) {
    this._temperature = this._maxTemp;
    alert('Maximum temperature is ' + this._maxTemp + '!');
  } else {
    this._temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this._temperature === this.MINIMUM_TEMPERATURE) {
    this._temperature = this.MINIMUM_TEMPERATURE;
    alert('Minimum temperature is ' + this.MINIMUM_TEMPERATURE + '!');
  } else {
    this._temperature -= 1;
  }
  return this._temperature;
};

Thermostat.prototype.togglePowerSaving = function () {
  if (this._powerSaving === true) {
    this._powerSaving = false;
    this._maxTemp = this.MAX_TEMP_PSM_OFF;
    this._powerSavingStatus = 'Power Saving is Off';
  } else {
    this._powerSaving = true;
    this._maxTemp = this.MAX_TEMP_PSM_ON;
    this._powerSavingStatus = 'Power Saving is On';
  }
};

Thermostat.prototype.reset = function () {
  this._temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return 'low-usage';
  } else if (this._temperature <= 25 && this._temperature >= 18) {
    return 'medium-usage';
  } else if (this._temperature > 25) {
    return 'high-usage';
  };
};

var thermostat = new Thermostat();