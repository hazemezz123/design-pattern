import React, { useEffect } from "react";
import Tea from "../HotBevrage/Tea";
import Coffee from "../HotBevrage/Coffee";
import CoffeeMix from "../HotBevrage/Coffemix";
const Template = () => {
  useEffect(() => {
    const tea = new Tea();
    console.log("preparing tea");
    tea.prepare();

    const coffee = new Coffee();
    console.log("preparing coffee");
    coffee.prepare();

    const coffeeMix = new CoffeeMix();
    console.log("preparing CoffeeMix");
    coffeeMix.prepare();
  }, []);
  return <div>Check Your Console</div>;
};

export default Template;
