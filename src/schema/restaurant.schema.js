const restaurantSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    image: { type: "string" },
    tag: { type: "array", maxItems: 3 },
    // closeAt: { type: "object" },
    minimum: { type: "number" },
    deliveryCharge: { type: "number" },
    address: { type: "string" },
    email: {
      type: "string",
      format: "email",
    },
    contact: { type: "string" },
  },
  required: [
    "name",
    "image",
    "tag",
    // "closeAt",
    "minimum",
    "deliveryCharge",
    "address",
    "email",
    "contact",
  ],
  additionalProperties: false,
};

module.exports = { restaurantSchema };
