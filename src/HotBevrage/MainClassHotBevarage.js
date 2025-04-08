class HoTBeverage {
  prepare() {
    this.boilWater();
    this.pourInCup();
    this.brew();
    this.addCondiments();
  }
  boilWater() {
    console.log("Boiling water");
  }
  pourInCup() {
    console.log("Pouring into cup");
  }
  brew() {
    throw new Error("Subclasses must implement brew() method");
  }
  addCondiments() {
    throw new Error("Subclasses must implement addCondiments() method");
  }
}
export default HoTBeverage;
