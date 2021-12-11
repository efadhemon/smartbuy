import { CoreAxiosInstance } from "@shared/config";
import { IBaseFilter, ICreateAdmin, IUpdateAdmin } from "@shared/interfaces";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/admin/";

export const AdminService = {
    NAME: END_POINT,
    create(payload: ICreateAdmin) {
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
    update(payload: IUpdateAdmin) {
        const { id } = payload;
        delete payload.id;
        return CoreAxiosInstance.put(`${END_POINT}${id}`, payload);
    },
    delete(id: string) {
        return CoreAxiosInstance.delete(`${END_POINT}${id}`);
    },
};
