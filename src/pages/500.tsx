import AppLayout from "@modules/common/layout/AppLayout";
import React from "react";

const Custom404 = () => {
    return (
        <AppLayout>
            <div className="text-center py-20">
                <h1 className="text-4xl text-red-600">500 - Server-side error occurred</h1>
            </div>
        </AppLayout>
    );
};

export default Custom404;
