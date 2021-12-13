import { Request, Response } from "express";
import { responseData } from "../../shared/utils/responseData";
import BannerService from "./banner.service";

const bannerController = {
    create: async (req: Request, res: Response) => {
        const newBanner = await BannerService.create(req.body);
        return res.status(200).send(responseData(newBanner));
    },
    get: async (req: Request, res: Response) => {
        const banners = await BannerService.get();
        return res.status(200).send(responseData(banners));
    },
    getById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const banner = await BannerService.getById(id);
        return res.status(200).send(responseData(banner));
    },
    updateByID: async (req: Request, res: Response) => {
        const id = req.params.id;
        const updatedBanner = await BannerService.updateByID(id, req.body);
        return res.status(200).send(responseData(updatedBanner));
    },
    deleteById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const deletedBanner = await BannerService.deleteById(id);
        return res.status(200).send(responseData(deletedBanner));
    },
};

export default bannerController;
