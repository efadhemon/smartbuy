import IAdmin from "./admin.interface";
import Admin from "./admin.model";

const createAdmin = async (admin: IAdmin) => {
    return Admin.create(admin);
};

const getAdmins = async () => {
    return Admin.find({});
};

const getAdminById = async (adminId: string) => {
    return Admin.findById(adminId);
};

const updateAdminById = async (adminId: string, update: any) => {
    return Admin.findByIdAndUpdate(adminId, update, { new: true });
};

const deleteAdminById = async (adminId: string) => {
    return Admin.findByIdAndDelete(adminId);
};

const adminService = {
    createAdmin,
    getAdmins,
    getAdminById,
    updateAdminById,
    deleteAdminById,
};

export default adminService;
