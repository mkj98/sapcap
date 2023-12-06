using { managed } from '@sap/cds/common';



service ShippingService @(path: '/calculate-shipping') {
    entity ShippingRequest {
  from_country_code          : String;
  from_postal_code           : String;
  to_country_code             : String;
  to_postal_code              : String;
  to_city_locality            : String;
  to_state_province          : String;
  weight_value               : Decimal(9, 2);
  weight_unit                : String;
  dimensions_unit            : String;
  dimensions_length          : Decimal(9, 2);
  dimensions_width           : Decimal(9, 2);
  dimensions_height          : Decimal(9, 2);
  confirmation               : String;
  address_residential_indicator: String;
}
  action calculateShipping(request : ShippingRequest) returns String ;
  function calc(fromCountryCode : String) returns String;
}
