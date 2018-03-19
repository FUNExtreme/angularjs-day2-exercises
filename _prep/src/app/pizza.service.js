export function PizzaService() {
    this.getPizzas = function() {
        return [
            {
                id: 0,
                name: "Salami",
                description: "ne pizza met vlees",
                ingredients: ["salami"]
            },
            {
                id: 1,
                name: "Margharitta",
                description: "ne pizza zonder vlees",
                ingredients: ["cheese"]
            },
            {
                id: 1,
                name: "Hawaii",
                description: ":(",
                ingredients: ["pineapple", "cheese"]
            }
        ]
    };

    this.getIngredients = function() {
        return [
            {
                name: 'Cheese'
            },
            {
                name: 'Salami'
            }
        ]
    }    
}
PizzaService.iid = "PizzaService";