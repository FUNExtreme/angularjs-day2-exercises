import { IHttpService } from 'angular';
import { Pizza, Ingredient } from '../model';
import { Constants } from '../app.constants';

export class PizzaService {
  static iid = "PizzaService";
  static $inject = ["$http"];
  constructor(private http: IHttpService) {
  }

  getPizzas() {
    return this.http.get<Pizza[]>(`${Constants.baseUrlApi}/pizza`)
      .then((response) => { return response.data });
  };

  getIngredients() {
    return this.http.get<Ingredient[]>(`${Constants.baseUrlApi}/ingredients`)
      .then((response) => { return response.data });
  }
}
