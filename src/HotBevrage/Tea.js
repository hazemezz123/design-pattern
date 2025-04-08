import HoTBeverage from "./MainClassHotBevarage";
class Tea extends HoTBeverage {
  brew() {
    console.log("هنقع الشاي");
  }
  addCondiments() {
    console.log("Adding نعناع");
  }
}
export default Tea;
