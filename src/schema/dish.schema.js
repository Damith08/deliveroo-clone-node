const dishSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    price: { type: "string" },
    restaurant_id: {
      type: "string",
    },
    dishCategory_id: {
      type: "string",
    },
    image: { type: "string" },
  },
  required: [
    "name",
    "description",
    "price",
    "restaurant_id",
    "dishCategory_id",
    "image",
  ],
  additionalProperties: false,
};
module.exports = { dishSchema };
