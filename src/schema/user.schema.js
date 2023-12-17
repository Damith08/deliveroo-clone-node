const registerSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
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
    "firstName",
    "lastName",
    "username",
    "email",
    "password",
    "address",
    "contact",
  ],
  additionalProperties: false,
};
module.exports = { registerSchema };
