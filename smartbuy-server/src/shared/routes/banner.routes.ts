import express from "express";
import bannerController from "../../modules/banner/banner.controller";

const bannerRouter = express.Router();

// banner routes
bannerRouter.post("/", bannerController.create);
bannerRouter.get("/", bannerController.get);
bannerRouter.get("/:id", bannerController.getById);
bannerRouter.put("/:id", bannerController.updateByID);
bannerRouter.delete("/:id", bannerController.deleteById);

export default bannerRouter;
