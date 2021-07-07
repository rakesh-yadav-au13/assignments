import express from "express";
const router = express.Router();
import isAuth from "../middelwares/isAuth";

import {
  validateRegister,
  validateLogin,
  validateState,
  isRequestValidate,
  validateDistrict,
  validateChild,
} from "../utils/sanitizeAndValidate";

import { AuthLogin, AuthRegister } from "../controlers/AuthControler";

import { CreateState, GetState } from "../controlers/StateControler";

import { CreateDistrict, GetDistrict } from "../controlers/DistrictControler";
import { CreateChild, GetChildProfiles } from "../controlers/ChildControler";
import isFileValid from "../middelwares/isFileValid";

router.post("/register", validateRegister, isRequestValidate, AuthRegister);

router.post("/login", validateLogin, isRequestValidate, AuthLogin);

router.get("/get_state", isAuth, GetState);

router.post(
  "/create/state",
  isAuth,
  validateState,
  isRequestValidate,
  CreateState
);

router.post(
  "/create/district",
  isAuth,
  validateDistrict,
  isRequestValidate,
  CreateDistrict
);

router.get("/get_district", isAuth, GetDistrict);

router.get("/get_child_profile", isAuth, GetChildProfiles);

router.post(
  "/create/child",
  isAuth,
  isFileValid,
  validateChild,
  isRequestValidate,
  CreateChild
);

export default router;
