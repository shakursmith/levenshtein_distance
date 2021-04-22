const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const levenshteinDistance = require("../utils/levenshtein");

function hasText(req, res, next) {
  const { data: { first_string, second_string } = {} } = req.body;

  if (first_string && second_string) {
    res.locals.first_string = first_string;
    res.locals.second_string = second_string;
    return next();
  }
  next({
    status: 400,
    message: "Length of 'string' property must be greater than 0.",
  });
}

function hasValidText(req, res, next) {
  const { first_string, second_string } = res.locals;
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

async function calculate(req, res, next) {
  const { first_string, second_string } = res.locals;
  const distance = levenshteinDistance(first_string, second_string);
  return await res.status(201).json({ data: distance });
}

module.exports = {
  calculate: [
    asyncErrorBoundary(hasText),
    asyncErrorBoundary(hasValidText),
    asyncErrorBoundary(calculate),
  ],
};
