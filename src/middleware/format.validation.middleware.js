const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
// register validation
module.exports.registerUserValidation = (schema) => {
  const validate = ajv.compile(schema);
  return (req, res, next) => {
    const isValid = validate(req.body);
    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "Auth failed",
        data: validate.errors,
      });
    }
    next();
  };
};

// login validation
module.exports.loginUserValidation = (schema) => {
  const validate = ajv.compile(schema);
  return (req, res, next) => {
    const isValid = validate(req.body);
    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "Login failed",
        data: validate.errors,
      });
    }
    next();
  };
};

// restaurant validation
module.exports.restaurantValidation = (schema) => {
  const validate = ajv.compile(schema);
  return (req, res, next) => {
    const isValid = validate(req.body);
    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "VALIDATION FAILED",
        data: validate.errors,
      });
    }
    next();
  };
};
