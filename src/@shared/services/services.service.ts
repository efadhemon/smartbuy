import { CoreAxiosInstance } from "@shared/config";
import { IBaseFilter } from "@shared/interfaces";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/services/";

export const ServicesService = {
  NAME: "services",
  filter(options: IBaseFilter) {
    return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`);
  },
  getById(id: string) {
    return CoreAxiosInstance.get(`${END_POINT}${id}`);
  },
  assignPackages(serviceId: string) {
    if (serviceId) {
      return CoreAxiosInstance.get(`${END_POINT}packages/${serviceId}`);
    }
  },
};
