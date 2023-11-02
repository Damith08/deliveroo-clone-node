const dishSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    price: { type: "number" },
    restaurant_id: {
      type: "string",
    },
    dishCategory_id: {
      type: "string",
    },
  },
  required: ["name", "price", "restaurant_id", "dishCategory_id"],
  additionalProperties: false,
};
module.exports = { dishSchema };
