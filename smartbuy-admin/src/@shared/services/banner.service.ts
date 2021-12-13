import { IBaseFilter, ICreateBanner, IUpdateBanner } from "@shared/interfaces";

import { CoreAxiosInstance } from "@shared/config";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/banner/";

export const BannerService = {
    NAME: END_POINT,
    create(payload: ICreateBanner) {
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
    update(payload: IUpdateBanner) {
        const { id } = payload;
        delete payload.id;
        return CoreAxiosInstance.put(`${END_POINT}${id}`, payload);
    },
    delete(id: string) {
        return CoreAxiosInstance.delete(`${END_POINT}${id}`);
    },
};
