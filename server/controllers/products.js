const Product = require('../models/products')


exports.getProducts= function(req,res,next){
    Product.find().exec()
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      res.status(500).send("error getting products");
    });;
}

exports.postProduct = function (req, res, next) {
  const productObj = new Product(req.body);
  const validationError = productObj.validateSync();

  if (validationError) {
    res.status(400).send('Validation error: ' + validationError.message);
    return;
  }

  productObj.save()
    .then(() => {
      res.send("Product added successfully");
    })
    .catch((error) => {
      res.status(500).send('Error adding product: ' + error.message);
    });
};