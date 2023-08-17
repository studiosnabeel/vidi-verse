import { createError } from "../error.js";
import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(400, "You can only update you own Account!"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted successfully!");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(500, "You can only delete your own account."));
  }
};

export const getUser = async (req, res, next) => {};

export const subscribe = async (req, res, next) => {};

export const unsubscribe = async (req, res, next) => {};

export const like = async (req, res, next) => {};

export const dislike = async (req, res, next) => {};
