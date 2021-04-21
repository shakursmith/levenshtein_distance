const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function hasText(req, res, next) {
  const { data: { first_string, second_string } = {} } = req.body;

  if (first_string && second_string) {
    return next();
  }
  next({
    status: 400,
    message: "Length of 'string' property must be greater than 0.",
  });
}

function hasValidText(req, res, next) {
  const { data: { first_string, second_string } = {} } = req.body;
  let validator = /^[a-zA-Z]+$/;

  if (!validator.test(first_string) || !validator.test(second_string)) {
    next({
      status: 400,
      message:
        "A 'string' property may only include letters A-Z. No spaces or special characters allowed.",
    });
  }

  return next();
}

async function create(req, res, next) {
  const newData = ({ first_string, second_string } = req.body.data);
  console.log(newData);
  return await res.status(201).json({ data: newData });
}

module.exports = {
  create: [
    asyncErrorBoundary(hasText),
    asyncErrorBoundary(hasValidText),
    asyncErrorBoundary(create),
  ],
};
