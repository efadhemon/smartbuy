import { IBaseFilter, ICreateUser } from "@shared/interfaces";

import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance";
import { IUpdateUser } from "../interfaces/user.interfaces";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/user/";

export const UserService = {
	NAME: END_POINT,
    create(payload: ICreateUser) {
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
    update(payload: IUpdateUser) {
        const { id } = payload;
        delete payload.id;
        return CoreAxiosInstance.put(`${END_POINT}${id}`, payload);
    },
    delete(id: string) {
        return CoreAxiosInstance.delete(`${END_POINT}${id}`);
    },
};
