import { IBaseFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";
import { ProductService } from "@shared/services";



//---------------- useCategories hook ------------------------------------
type IFuseProducts = {
    options: IBaseFilter;
    config?: QueryConfig<typeof ProductService.filter>;
};
export const useProducts = ({ options, config }: IFuseProducts) => {
    return useQuery({
        ...config,
        queryKey: [ProductService.NAME, ProductService.filterById.name],
        queryFn: () => ProductService.filter(options),
    });
};



//----------------------- useProduct hook --------------------------------------
type IFuseProduct = {
    id: string;
    config?: QueryConfig<typeof ProductService.filterById>;
};

export const useProduct = ({ id, config }: IFuseProduct) => {
    return useQuery({
        ...config,
        queryFn: () => ProductService.filterById(id),
    });
};


//------------------ useCreateProduct hook ---------------------------------
type IFuseCreateProduct = {
    config?: MutationConfig<typeof ProductService.create>;
};

export const useCreateProduct = ({ config }: IFuseCreateProduct = {}) => {
    return useMutation({
        ...config,
        mutationFn: ProductService.create,
    });
};



//------------------ useUpdateProduct hook ----------------------------------
type IFuseUpdateProduct = {
    config?: MutationConfig<typeof ProductService.update>;
};

export const useUpdateProduct = ({ config }: IFuseUpdateProduct = {}) => {
    return useMutation({
        ...config,
        mutationFn: ProductService.update,
    });
};


//------------------ useDeleteProduct hook ----------------------------------
type IFuseDeleteProduct = {
    config?: MutationConfig<typeof ProductService.delete>;
};

export const useDeleteProduct = ({ config }: IFuseDeleteProduct = {}) => {
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(ProductService.NAME);
            notification.success({
                type: "success",
                message: "Product successfully deleted",
            });
        },
        ...config,
        mutationFn: ProductService.delete,
    });
};
