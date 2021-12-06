import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { authValidation } from "./auth.validator";
import User from "../user/user.model";
import config from "../../shared/config/config";
import Admin from "../admin/admin.model";

//-------------------- user auth ----------------------------------------------
const userResister = async (req: Request, res: Response) => {
    // before registration data validation
    const { error } = authValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // checking if the user already in database
    const phoneExist = await User.findOne({ phone: req.body.phone });
    if (phoneExist)
        return res.status(400).send("Phone Number is already exits");

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // create a new user
    const newUser = new User({
        phone: req.body.phone,
        password: hashPassword,
    });
    const resistedUser = await newUser.save();

    // create and assign a token
    const token = jwt.sign({ _id: resistedUser._id }, config.token.secret);
    res.header("auth-token", token).send(token);
};

const userLogin = async (req: Request, res: Response) => {
    // checking if the user is exist
    const user = await User.findOne({ phone: req.body.phone });
    if (!user) return res.status(400).send("Phone or Password is wrong");

    // Is the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Phone or Password is wrong");

    // create and assign a token
    const token = jwt.sign({ _id: user._id }, config.token.secret);
    res.header("auth-token", token).send(token);
};





//-------------------- admin auth ----------------------------------------------
const adminResister = async (req: Request, res: Response) => {
    // before registration data validation
    const { error } = authValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // checking if the admin already in database
    const phoneExist = await Admin.findOne({ phone: req.body.phone });
    if (phoneExist)
        return res.status(400).send("Phone Number is already exits");

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // create a new admin
    const newAdmin = new Admin({
        phone: req.body.phone,
        password: hashPassword,
    });
    const resistedAdmin = await newAdmin.save();

    // create and assign a token
    const token = jwt.sign({ _id: resistedAdmin._id }, config.token.secret);
    res.header("auth-token", token).send(token);
};

const adminLogin = async (req: Request, res: Response) => {
    // checking if the admin is exist
    const admin = await Admin.findOne({ phone: req.body.phone });
    if (!admin) return res.status(400).send("Phone or Password is wrong");

    // Is the password is correct
    const validPass = await bcrypt.compare(req.body.password, admin.password);
    if (!validPass) return res.status(400).send("Phone or Password is wrong");

    // create and assign a token
    const token = jwt.sign({ _id: admin._id }, config.token.secret);
    res.header("auth-token", token).send(token);
};

const authController = {
    userResister,
    userLogin,
    adminResister,
    adminLogin,
};

export default authController;
