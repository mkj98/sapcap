const axios = require('axios');

async function calculateShipping(requestBody) {
   const dummy = {
    from_country_code: "US",
    from_postal_code: "78756",
    to_country_code: "US",
    to_postal_code: "95128",
    to_city_locality: "San Jose",
    to_state_province: "CA",
    weight_value: 1,
    weight_unit: "ounce",
    dimensions_unit: "inch",
    dimensions_length: 5,
    dimensions_width: 5,
    dimensions_height: 5,
    confirmation: "none",
    address_residential_indicator: "no"
  };
  const options = {
    method: 'post',
    url: 'https://api.shipengine.com/v1/rates/estimate',
    headers: {
      'Host': 'api.shipengine.com',
      'API-Key': 'TEST_CmMjy6UsioeRIQUtorP7Z9oV16vsPFNU2rB4hdpoNXQ',
      'Content-Type': 'application/json'
    },
    data: dummy
  };

  try {
    const response = await axios(options);
    console.log(response.data);
    return `${response.data}`; // Assuming you want to return the response body
  } catch (error) {
    throw new Error('Error calculating shipping' + error);
  }
}

module.exports =  calculateShipping ;
