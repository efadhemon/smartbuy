import IUser from "./user.interface";
import User from "./user.model";

const createUser = async (user: IUser) => {
    return User.create(user);
};

const getUsers = async () => {
    return User.find({});
};

const getUserById = async (userId: string) => {
    return User.findById(userId);
};

const updateUserById = async (userId: string, update: any) => {
    return User.findByIdAndUpdate(userId, update, { new: true });
};

const deleteUserById = async (userId: string) => {
    return User.findByIdAndDelete(userId);
};

const userService = {
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};

export default userService;
