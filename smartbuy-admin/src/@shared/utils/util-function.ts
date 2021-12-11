// import { IBaseFilter } from "@shared/interfaces"

//base filter query utils
export const concatFilterQuery = (options: any): string => {
    return Object.keys(options)
        .map((x) => {
            return `${x}=${options[x]}`;
        })
        .join("&");
};

const storagePrefix = "_auth_";

export const storage = {
    getToken: (): string | false => {
        if (!window.localStorage || !window.JSON) {
            return false;
        }
        var item = localStorage.getItem(`${storagePrefix}token`);
        if (!item) {
            return false;
        }

        return JSON.parse(item) as string;
    },

    setToken: (token: string) => {
        window.localStorage.setItem(
            `${storagePrefix}token`,
            JSON.stringify(token)
        );
    },

    clear: () => {
        localStorage.clear();
    },

    setData(key: string, data: any) {
        if (!window.localStorage || !window.JSON || !key) {
            return;
        }
        localStorage.setItem(key, JSON.stringify(data));
    },

    getDate(key: string) {
        if (!window.localStorage || !window.JSON || !key) {
            return;
        }
        var item = localStorage.getItem(key);

        if (!item) {
            return;
        }

        return JSON.parse(item);
    },

    removeData(key: string) {
        if (!window.localStorage || !window.JSON || !key) {
            return;
        }
        localStorage.removeItem(key);
    },
};
export const methodSuccessMessage = (
    method: "POST" | "PUT" | "DELETE" | string
): string => {
    switch (method.toUpperCase()) {
        case "POST":
            return "Created Success";
        case "PUT":
            return "Update Success";
        case "DELETE":
            return "Delete Success";
        default:
            return "";
    }
};
