const responseData = (data, page, take) => {
    const startIndex = (page - 1) * take;
    const endIndex = page * take;
    if (page && take) {
        return {
            success: true,
            message: "Successfully response",
            total: data.length,
            payload: data.slice(startIndex, endIndex),
            page: page,
            take: take,
        };
    } else {
        return {
            success: true,
            message: "Successfully response",
            total: Array.isArray(data) ? data.length : 1,
            payload: data,
        };
    }
};

module.exports.responseData = responseData;
