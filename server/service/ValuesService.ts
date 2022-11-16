const valuesService = class ValuesService {
  getVals() {
    return {
      "Покупа недвижимости": {
        switch: 0.3,
        percentDefault: 11,
        inputs: {
          price: { x: 100000, y: 5, z: 1000000 },
          firstVal: { x: 10000, y: 5 },
          time: { x: 1, z: 30 },
        },
      },
      "Покупа автомобиля": {
        switch: 0.5,
        percentDefault: 10,
        inputs: {
          price: { x: 500000, y: 5, z: 1000000 },
          firstVal: { x: 10000, y: 5 },
          time: { x: 1, z: 30 },
        },
      },
      Госпрограмма: {
        switch: 0.7,
        percentDefault: 11,
        inputs: {
          price: { x: 100000, y: 100, z: 1000000 },
          firstVal: { x: 10000, y: 100 },
          time: { x: 1, z: 10 },
        },
      },
    };
  }
};
module.exports = { valService: new valuesService() };
