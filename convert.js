class Converter {
  constructor() {
    this.ratios = {
      length: {
        mm: 1,
        cm: 10,
        inches: 25.4,
        feet: 304.8,
        m: 1000,
      },
      volume: {
        ml: 1,
        dl: 100,
        l: 1000,
        cups: 236.588,
        pints: 473.176,
        quarts: 946.353,
      },
    };
  }

  convert(value, inputUnit, outputUnit, category) {
    const inputRatio = this.ratios[category][inputUnit];
    const outputRatio = this.ratios[category][outputUnit];

    return (value * inputRatio) / outputRatio;
  }
}

const converter = new Converter();

const args = process.argv.slice(2);
const value = parseFloat(args[0]);
const inputUnit = args[1].toLowerCase();
const outputUnit = args[3].toLowerCase();
const category = inputUnit in converter.ratios.length ? "length" : "volume";

const result = converter.convert(value, inputUnit, outputUnit, category);

console.log(`${value} ${inputUnit} = ${result} ${outputUnit}`);