import {
    IBaseFilter,
    ICreateCategory,
    IUpdateCategory,
} from "@shared/interfaces";

import { CoreAxiosInstance } from "@shared/config";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/category/";

export const categoryService = {
    NAME: END_POINT,
    create(payload: ICreateCategory) {
        return CoreAxiosInstance.post(END_POINT, payload);
    },
    filter(options: IBaseFilter) {
        return CoreAxiosInstance.get(
            `${END_POINT}?${concatFilterQuery(options)}`
        );
    },
    filterById(id: string) {
        return CoreAxiosInstance.get(`${END_POINT}${id}`);
    },
    update(payload: IUpdateCategory) {
        const { id } = payload;
        delete payload.id;
        return CoreAxiosInstance.put(`${END_POINT}${id}`, payload);
    },
    delete(id: string) {
        return CoreAxiosInstance.delete(`${END_POINT}${id}`);
    },
};
