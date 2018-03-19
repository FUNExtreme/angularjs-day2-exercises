import "./assets/css/reset.css";
import "./assets/css/layout.css";

import * as angular from 'angular';

import { RootController } from './app/root.controller';
import { PizzeriaController } from './app/pizzeria.controller';

import { PizzaService } from './app/pizza.service';

import { RealPizzasOnlyFilter } from './app/realPizzasOnly.filter';

import { FocusDirective } from './app/focus.directive';


var app = angular.module('app', []);

app.controller(RootController.iid, RootController);
app.controller(PizzeriaController.iid, PizzeriaController);

app.service(PizzaService.iid, PizzaService);

app.filter(RealPizzasOnlyFilter.iid, RealPizzasOnlyFilter);

app.directive(FocusDirective.iid, FocusDirective);