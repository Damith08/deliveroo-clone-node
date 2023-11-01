const orderSchema = {
  type: "object",
  properties: {
    quantity: { type: "number" },
    total_price: { type: "number" },
    user_id: {
      type: "string",
    },
    restaurant_id: {
      type: "string",
    },
    dish_id: {
      type: "string",
    },
  },
  required: ["quantity", "total_price", "dish_id", "restaurant_id", "user_id"],
  additionalProperties: false,
};
module.exports = { orderSchema };
