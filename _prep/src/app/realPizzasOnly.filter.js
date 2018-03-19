export function RealPizzasOnlyFilter () {
  return function(input) {
    if(!Array.isArray(input))
        return input;

    if(input.length === 0)
        return input;

    var properPizzas = [];
    for(var x = 0; x < input.length; x ++) {
        var containsPineapple = false;

        for(var y = 0; y < input[x].ingredients.length; y ++) {
            if(input[x].ingredients[y].toLowerCase() === "pineapple") {
                containsPineapple = true;
                break;
            }
        }

        if(!containsPineapple)
            properPizzas.push(input[x]);
    }
    return properPizzas;
  };
};
RealPizzasOnlyFilter.iid = "realPizzasOnly"; // lower case first letter because this is a function instead of a "class"