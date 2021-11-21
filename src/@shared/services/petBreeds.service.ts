import { IBaseFilter } from "@shared/interfaces";
import { concatFilterQuery } from "@shared/utils";
import { CoreAxiosInstance } from "@shared/config";

const END_POINT: string = "/petBreeds/";

export const PetBreedsService = {
  NAME: "petBreeds",
  filter(options: IBaseFilter) {
    return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`);
  },
  getById(payload: string) {
    return CoreAxiosInstance.get(`${END_POINT}${payload}`);
  },
};
