import { IDirective } from "angular";

export class PizzaDirective implements IDirective {
  static iid: string = "appPizza";

  templateUrl = './app/component/pizza/pizza.directive.html';
  restrict = 'E';
  scope = {
      pizza: '='
  }

  constructor() {
    console.log('PizzaDirective');      
  }
}
