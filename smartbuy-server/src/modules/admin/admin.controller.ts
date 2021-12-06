import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { authValidation } from "../auth/auth.validator";
import { responseData } from "../../shared/utils/responseData";
import Admin from "./admin.model";
import adminService from "./admin.service";

const createAdmin = async (req: Request, res: Response) => {
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

    const createdAdmin = await adminService.createAdmin(newAdmin);
    return res.status(200).send(responseData(createdAdmin));
};

const getAdmins = async (req: Request, res: Response) => {
    const admins = await adminService.getAdmins();
    return res.send(responseData(admins, req.query.page, req.query.take));
};

const getAdminById = async (req: Request, res: Response) => {
    const adminId = req.params.id;
    const admin = await adminService.getAdminById(adminId);
    return res.send(responseData(admin));
};

const updateAdminById = async (req: Request, res: Response) => {
    const adminId = req.params.id;
    const updatedData = req.body;
    const updatedAdmin = await adminService.updateAdminById(
        adminId,
        updatedData
    );
    return res.send(responseData(updatedAdmin));
};

const deleteAdminById = async (req: Request, res: Response) => {
    const adminId = req.params.id;
    const deletedAdmin = await adminService.deleteAdminById(adminId);
    return res.send(responseData(deletedAdmin));
};

const adminController = {
    createAdmin,
    getAdmins,
    getAdminById,
    updateAdminById,
    deleteAdminById,
};

export default adminController;
