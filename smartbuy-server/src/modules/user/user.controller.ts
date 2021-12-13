import User from "./user.model";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import userService from "./user.service";
import { authValidation } from "../auth/auth.validator";
import { responseData } from "../../shared/utils/responseData";

const createUser = async (req: Request, res: Response) => {
    // before registration data validation
    const { error } = authValidation({
        phone: req.body.phone,
        password: req.body.password,
    });
    if (error) return res.send({ message: error.details[0].message });

    // checking if the user already in database
    const phoneExist = await User.findOne({ phone: req.body.phone });
    if (phoneExist)
        return res.send({ message: "Phone Number is already exits" });

    const emailExist = await User.findOne({ phone: req.body.email });
    if (emailExist) return res.send({ message: "Email is already exits" });

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = {
        ...req.body,
        password: hashPassword,
    };

    const createdUser = await userService.createUser(newUser);
    return res.status(200).send(responseData(createdUser, req));
};

const getUsers = async (req: Request, res: Response) => {
    const users = await userService.getUsers();
    return res.send(responseData(users, req));
};

const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    return res.send(responseData(user, req));
};

const updateUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const updatedData = req.body;
    const user = await userService.updateUserById(userId, updatedData);
    return res.send(responseData(user, req));
};

const deleteUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const user = await userService.deleteUserById(userId);
    return res.send(responseData(user, req));
};

const userController = {
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};

export default userController;
