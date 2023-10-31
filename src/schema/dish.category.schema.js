const dishCategorySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
  },
  required: ["name"],
  additionalProperties: false,
};
module.exports = { dishCategorySchema };
