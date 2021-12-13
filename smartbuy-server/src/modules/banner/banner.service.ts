import IBanner from "./banner.interface";
import Banner from "./banner.model";

const bannerService = {
    create: async (category: IBanner) => {
        return Banner.create(category);
    },
    get: async () => {
        return Banner.find({});
    },
    getById: async (id: string) => {
        return Banner.findById(id);
    },
    updateByID: async (id: string, data: any) => {
        return Banner.findByIdAndUpdate(id, data, { new: true });
    },
    deleteById: async (id: string) => {
        return Banner.findByIdAndDelete(id);
    },
};

export default bannerService;
