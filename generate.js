function make() {
    var faker = require("faker");
    faker.locale = "en_GB";
    var properties = []
    for (var id = 0; id < 30; id++) {
        var street = faker.address.streetAddress();
        var town = faker.address.city();
        var postcode = faker.address.zipCode();
        var bedrooms = faker.random.number({min:1, max:6})
        var price = faker.finance.amount(700000,12000000,2,"£")

        properties.push ({
            "id": 0,
            "address": {
                "street": street,
                "town": town,
                "postcode": postcode
              },  
            "bedrooms": bedrooms,
            "price": price
          });
    }
    return { "properties": properties }
}
module.exports = make
