const userPartiallyUpdateSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    address: {
      type: "string",
    },
    contact: {
      type: "string",
    },
  },
  required: ["firstName", "lastName", "address", "contact"],
  additionalProperties: false,
};
module.exports = { userPartiallyUpdateSchema };
