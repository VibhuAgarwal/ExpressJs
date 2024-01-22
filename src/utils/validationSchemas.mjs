export const createUserValidationSchema = {
  username: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: "Must be at least 5-32 characters",
    },
    notEmpty: {
      errorMessage: "UserName cannot be empty",
    },
    isString: {
      errorMessage: "username must be string",
    },
  },
  displayName: {
    notEmpty: true,
  },
};
