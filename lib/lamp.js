// lamp.js
class Lamp {
  constructor(maxBrightness) {
    this.currentBrightness = 0;
    this.maxBrightness = maxBrightness;
  }
  brighten(amount) {
    amount = amount || 1;
    this.currentBrightness += amount;
    if (this.currentBrightness > this.maxBrightness) {
      this.currentBrightness = this.maxBrightness;
    }
  }
  dim(amount) {
    amount = amount || 1;
    this.currentBrightness -= amount;
    if (this.currentBrightness < 0) {
      this.currentBrightness = 0;
    }
  }
  turnOff() {
    this.currentBrightness = 0;
  }
  turnOn() {
    this.currentBrightness = this.maxBrightness;
  }
}

export default Lamp.js;
