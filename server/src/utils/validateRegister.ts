import { UserInput } from "../resolvers/UserInput";
import * as EmailValidator from "email-validator";

export const validateRegsiter = (options: UserInput) => {
  if (options.fname.length <= 2) {
    return [
      {
        field: "fname",
        message: "length must be greater than 2",
      },
    ];
  }

  if (options.fname.length <= 2) {
    return [
      {
        field: "lname",
        message: "length must be greater than 2",
      },
    ];
  }

  if (EmailValidator.validate(options.email) === false) {
    return [
      {
        field: "email",
        message: "invalid email",
      },
    ];
  }

  if (options.password.length <= 2) {
    return [
      {
        field: "password",
        message: "length must be greater than 2",
      },
    ];
  }

  return null;
};