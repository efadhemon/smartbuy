import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { authValidation } from "../auth/auth.validator";
import { responseData } from "../../shared/utils/responseData";
import Admin from "./admin.model";
import adminService from "./admin.service";

const adminController = {
    create: async (req: Request, res: Response) => {
        // before registration data validation
        const { error } = authValidation({
            phone: req.body.phone,
            password: req.body.password,
        });
        if (error) return res.send({ message: error?.details[0]?.message });

        // checking if the admin already in database
        const phoneExist = await Admin.findOne({ phone: req.body.phone });
        if (phoneExist)
            return res.send({ message: "Phone Number is already exits" });

        const emailExist = await Admin.findOne({ phone: req.body.email });
        if (emailExist) return res.send({ message: "Email is already exits" });

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newAdmin = {
            ...req.body,
            password: hashPassword,
        };

        const createdAdmin = await adminService.create(newAdmin);
        return res.status(200).send(responseData(createdAdmin, req));
    },
    get: async (req: Request, res: Response) => {
        const admins = await adminService.get();
        return res.send(responseData(admins, req));
    },
    getById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const admin = await adminService.getById(id);
        return res.send(responseData(admin, req));
    },
    updateById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const updatedAdmin = await adminService.updateById(id, req.body);
        return res.send(responseData(updatedAdmin, req));
    },
    deleteById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const deletedAdmin = await adminService.deleteById(id);
        return res.send(responseData(deletedAdmin, req));
    },
};

export default adminController;
