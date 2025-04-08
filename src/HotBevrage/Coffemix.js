import HotBeverage from "./MainClassHotBevarage.js";

class CoffeeMix extends HotBeverage {
  brew() {
    console.log("معلقتين كةفي ميكس مهرمين");
  }
  addCondiments() {
    console.log("Adding  وسكر وحليب ");
  }
}
export default CoffeeMix;
