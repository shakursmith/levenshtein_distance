const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res, next) {
  // const newRestaurant = ({ restaurant_name, cuisine, address } = req.body.data);
  console.log("Ready to create something!");
  return res.status(201).json({ data: "Ready to create something!" });
  // restaurantsService
  //   .create(newRestaurant)
  //   .then((newRestaurant) => res.status(201).json({ data: newRestaurant[0] }));
}

module.exports = {
  create: [asyncErrorBoundary(create)],
};
