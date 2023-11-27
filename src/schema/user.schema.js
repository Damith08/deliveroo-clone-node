const registerSchema = {
  type: "object",
  properties: {
    first_name: {
      type: "string",
    },
    last_name: {
      type: "string",
    },
    username: {
      type: "string",
    },
    email: {
      type: "string",
      format: "email",
    },
    password: {
      type: "string",
    },
    address: {
      type: "string",
    },
    contact: {
      type: "string",
    },
  },
  required: [
    "first_name",
    "last_name",
    "username",
    "email",
    "password",
    "address",
    "contact",
  ],
  additionalProperties: false,
};
module.exports = { registerSchema };
