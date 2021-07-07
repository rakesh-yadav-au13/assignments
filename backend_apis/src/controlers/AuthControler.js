import UserSchema from "../models/schema/UserSchema";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const AuthRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await UserSchema.find({ email: email });
    if (user.length) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        errors: [
          {
            value: req.body.email,
            msg: "User already exists.",
            param: "email",
            location: "body",
          },
        ],
        message: "Unable to create user",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    user = new UserSchema({
      name,
      email,
      password: hashPassword,
    });
    await user.save();
    res.status(200).json({
      success: true,
      status: 200,
      data: user,
      errors: [],
      message: "User Created Successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const AuthLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await UserSchema.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        errors: [
          {
            value: req.body.email,
            msg: "Invalid credentials",
            param: "email",
            location: "body",
          },
        ],
        message: "Invalid credentials",
      });
    }
    const matchPassword = bcrypt.compareSync(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        errors: [
          {
            value: req.body.password,
            msg: "Invalid credentials",
            param: "password",
            location: "body",
          },
        ],
        message: "Invalid credentials",
      });
    }
    const logintoken = jwt.sign({ id: user._id }, process.env.jwt_secret, {
      expiresIn: "1d",
    });
    res.cookie("customerToken", logintoken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "none",
    });
    res.status(200).json({
      success: true,
      status: 200,
      data: logintoken,
      errors: [],
      message: "Login successfully!",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const AuthLogout = (req, res) => {
  res.clearCookie("customerToken");
  return res.status(200).json({
    success: true,
    status: 200,
    data: {},
    errors: [],
    message: "Logout Successfully",
  });
};
