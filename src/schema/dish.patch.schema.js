const dishPatchSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    price: { type: "number" },
    image: { type: "string" },
  },
  required: ["name", "price"],
  additionalProperties: false,
};
module.exports = { dishPatchSchema };
