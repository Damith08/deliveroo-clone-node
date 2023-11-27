const restaurantSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    address: { type: "string" },
    email: {
      type: "string",
      format: "email",
    },
    contact: { type: "string" },
  },
  required: ["name", "address", "email", "contact"],
  additionalProperties: false,
};

module.exports = { restaurantSchema };
