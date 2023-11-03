const userPartiallyUpdateSchema = {
  type: "object",
  properties: {
    first_name: {
      type: "string",
    },
    last_name: {
      type: "string",
    },
    address: {
      type: "string",
    },
    contact: {
      type: "number",
    },
  },
  required: ["first_name", "last_name", "address", "contact"],
  additionalProperties: false,
};
module.exports = { userPartiallyUpdateSchema };
