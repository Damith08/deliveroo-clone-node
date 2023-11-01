const orderPatchSchema = {
  type: "object",
  properties: {
    quantity: { type: "number" },
    total_price: { type: "number" },
  },
  required: ["quantity", "total_price"],
  additionalProperties: false,
};
module.exports = { orderPatchSchema };
