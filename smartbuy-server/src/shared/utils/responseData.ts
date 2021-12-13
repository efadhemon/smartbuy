import { Request } from "express";

export const responseData = (data: any, req: Request) => {
    const page: any = req.query.page;
    const take: any = req.query.take;
    const method = req.method;
    let path = req.baseUrl.slice(8);
    path = path.charAt(0).toUpperCase() + path.slice(1);

    if (page && take) {
        const startIndex = (page - 1) * take;
        const endIndex = page * take;
        return {
            success: true,
            message: path + " " + messageHandler(method),
            total: data.length,
            payload: data.slice(startIndex, endIndex),
            page: page,
            take: take,
        };
    } else {
        return {
            success: true,
            message: path + " " + messageHandler(method),
            total: Array.isArray(data) ? data.length : 1,
            payload: data,
        };
    }
};

const messageHandler = (method: any) => {
    switch (method.toLowerCase()) {
        case "get":
            return "successfully get";
            break;
        case "post":
            return "created successfully";
            break;
        case "put":
        case "patch":
            return "updated successfully";
            break;
        case "delete":
            return "deleted successfully";
            break;

        default:
            return "operations successful";
    }
};
