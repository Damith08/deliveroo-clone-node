const restaurantPatchSchema = {
  type: "object",
  properties: {
    address: { type: "string" },
    email: {
      type: "string",
      format: "email",
    },
    contact: { type: "string" },
  },
  required: ["address", "email", "contact"],
  additionalProperties: false,
};

module.exports = { restaurantPatchSchema };
