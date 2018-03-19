import { IDirective } from "angular";

export function PizzaDirective() {
  var directive = {
    restrict = 'E',
    templateUrl = './app/pizza.directive.html',
    scope = {
        pizza: '='
    }
  };

  return directive;
}
FocusDirective.iid = "appPizza";