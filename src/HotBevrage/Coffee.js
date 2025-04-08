import HoTBeverage from "./MainClassHotBevarage";

class Coffee extends HoTBeverage {
  brew() {
    console.log("معلقتين قهوة مهرمين");
  }
  addCondiments() {
    console.log("Adding  ماءوحليب ");
  }
}
export default Coffee;
