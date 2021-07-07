import { check, validationResult } from "express-validator";
export const validateRegister = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name field cannot be empty")
    .isAlphanumeric()
    .withMessage("Name cannot contain special characters"),

  check("email")
    .not()
    .isEmpty()
    .withMessage("Email field cannot be empty")
    .isEmail()
    .withMessage("Not a valid email"),

  check("password")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage(
      "Password must be 8<length, must contain 1 symbol, 1 uppercase, 1 lowercase and 1 number"
    )
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
    .withMessage(
      "Password must be 8<length, must contain 1 symbol, 1 uppercase, 1 lowercase and 1 number"
    ),
];

export const validateLogin = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Not a valid email"),

  check("password")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage(
      "Password must be 8<length, must contain 1 symbol, 1 uppercase, 1 lowercase and 1 number"
    )
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
    .withMessage(
      "Password must be 8<length, must contain 1 symbol, 1 uppercase, 1 lowercase and 1 number"
    ),
];

export const validateState = [
  check("state_name")
    .not()
    .isEmpty()
    .withMessage("State name field cannot be empty")
    .isAlphanumeric()
    .withMessage("State name cannot contain special characters"),
];
export const validateDistrict = [
  check("state_name")
    .not()
    .isEmpty()
    .withMessage("State name field cannot be empty")
    .isAlphanumeric()
    .withMessage("State name cannot contain special characters"),

  check("district_name")
    .not()
    .isEmpty()
    .withMessage("District name field cannot be empty")
    .isAlphanumeric()
    .withMessage("District name cannot contain special characters"),
];
export const validateChild = [
  check("name").not().isEmpty().withMessage("Name field cannot be empty"),
  check("father_name")
    .not()
    .isEmpty()
    .withMessage("Father name field cannot be empty"),

  check("mother_name")
    .not()
    .isEmpty()
    .withMessage("Mother name field cannot be empty"),

  check("dob").not().isEmpty().withMessage("DOB field cannot be empty"),
  check("sex").not().isEmpty().withMessage("Sex field cannot be empty"),

  check("district_id")
    .not()
    .isEmpty()
    .withMessage("District Name field cannot be empty"),
];

export const isRequestValidate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      status: 400,
      errors: errors.array(),
    });
  }
  next();
};
