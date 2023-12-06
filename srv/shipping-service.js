const  calculateShipping  = require('./shipping-heleper');

module.exports = (srv) => {
    
  srv.on('calculateShipping', async (req) => {
    const request = req.data;
    try {
      const result = await calculateShipping(request);
      console.log(result)
      return `Shipping cost: ${result}`;
    } catch (error) {
      return req.error(500, 'Error calculating shipping');
    }
  });

  srv.on('calc', async ({data:{fromCountryCode}}) => {
    const result = await calculateShipping({});
    return `Test String ${result}`
  })
};
