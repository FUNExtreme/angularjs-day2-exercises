import { module } from 'angular';

import "./app.scss";

import { RootController, PizzeriaController } from './controller';
import { PizzaService } from './service';
import { RealPizzasOnlyFilter } from './filter';
import { FocusDirective } from './component';
import { PizzaDirective } from './component/pizza/pizza.directive';


module('app', [])
  .controller(RootController.iid, RootController)
  .controller(PizzeriaController.iid, PizzeriaController)
  .service(PizzaService.iid, PizzaService)
  .filter(RealPizzasOnlyFilter.iid, RealPizzasOnlyFilter.filter)
  .directive(FocusDirective.iid, () => new FocusDirective())
  .directive(PizzaDirective.iid, () => new PizzaDirective());  
