import IAdmin from "./admin.interface";
import Admin from "./admin.model";

const adminService = {
    create: async (admin: IAdmin) => {
        return Admin.create(admin);
    },
    get: async () => {
        return Admin.find({});
    },
    getById: async (adminId: string) => {
        return Admin.findById(adminId);
    },
    updateById: async (adminId: string, update: any) => {
        return Admin.findByIdAndUpdate(adminId, update, { new: true });
    },
    deleteById: async (adminId: string) => {
        return Admin.findByIdAndDelete(adminId);
    },
};

export default adminService;
