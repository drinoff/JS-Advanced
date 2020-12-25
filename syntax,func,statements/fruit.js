function calculate(first, second, third) {

    let result = second/1000*third;
    console.log(`I need $${result.toFixed(2)} to buy ${(second/1000).toFixed(2)} kilograms ${first}.`);
}
calculate('orange', 2500, 1.80);