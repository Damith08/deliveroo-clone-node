const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
// schema validation
module.exports.schemaValidation = (schema) => {
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
