import "./pizzeria.scss";

import { PizzaService } from '../service/pizza.service';
import { IController } from "angular";
import { Pizza, Ingredient } from "../model";

export class PizzeriaController implements IController {
  static iid: string = "PizzeriaController"

  public pizzas: Pizza[];
  public selectedPizza: Pizza;
  public ingredients: Ingredient[];

  constructor(private pizzaService: PizzaService) {
  }

  $onInit(): void {
    this.pizzaService.getPizzas()
      .then((data) => { this.pizzas = data; });

    this.pizzaService.getIngredients()
      .then((data) => this.ingredients = data);
  }

  isAnIngredientSelected(obj): boolean {
    if (!this.ingredients) {
      return false;
    }
    for (var x = 0; x < this.ingredients.length; x++) {
      if (this.ingredients[x].selected) {
        return true;
      }
    }
    return false;
  }

  onPizzaClick(pizza: Pizza): void {
    this.selectedPizza = pizza;
  };

  onAddPizza(newPizza: Pizza): void {
    newPizza.ingredients = [];
    if (!this.ingredients) {
      return;
    }
    for (var x = 0; x < this.ingredients.length; x++) {
      let ingredient = this.ingredients[x];
      if (ingredient.selected) {
        newPizza.ingredients.push(new Ingredient(ingredient.name));
      }
    }
  };
}
PizzeriaController.$inject = [PizzaService.iid];
