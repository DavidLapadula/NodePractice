const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius, add } = require('../src/math');

test('Should calc total with tip', () => {
    const total = calculateTip(10, .3);

    expect(total).toBe(13);

});

test('Should calc with default tip', () => {
    const total = calculateTip(10);

    expect(total).toBe(12.5);
});

test('32 F to 0 c', () => {
    const celcius = fahrenheitToCelsius(32);
    expect(celcius).toBe(0);
});

test('0 c to 32 F', () => {
    const fahrenheit = celsiusToFahrenheit(0);
    expect(fahrenheit).toBe(32);
});

test('Should add two numbers', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5);
        done();
    });
});

test('Should add two numbers', async () => {
    const sum = await add(2, 4);
    expect(sum).toBe(6);
}); 
