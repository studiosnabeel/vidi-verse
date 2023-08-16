import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  //   console.log(req.body);
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).json("User signedup successfully");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      name: req.body.name,
    });
    if (!user) return next(createError(400, "User does not exist!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Password does not match!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(user);
  } catch (err) {
    next(err);
  }
};
