import { IBaseFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";
import { categoryService } from "@shared/services";



//---------------- useCategories hook ------------------------------------
type IFuseCategories = {
    options: IBaseFilter;
    config?: QueryConfig<typeof categoryService.filter>;
};
export const useCategories = ({ options, config }: IFuseCategories) => {
    return useQuery({
        ...config,
        queryKey: [categoryService.NAME, categoryService.filterById.name],
        queryFn: () => categoryService.filter(options),
    });
};



//----------------------- useCategory hook --------------------------------------
type IFuseCategory = {
    id: string;
    config?: QueryConfig<typeof categoryService.filterById>;
};

export const useCategory = ({ id, config }: IFuseCategory) => {
    return useQuery({
        ...config,
        queryFn: () => categoryService.filterById(id),
    });
};


//------------------ useCreateCategory hook ---------------------------------
type IFuseCreateCategory = {
    config?: MutationConfig<typeof categoryService.create>;
};

export const useCreateCategory = ({ config }: IFuseCreateCategory = {}) => {
    return useMutation({
        ...config,
        mutationFn: categoryService.create,
    });
};



//------------------ useUpdateCategory hook ----------------------------------
type IFuseUpdateCategory = {
    config?: MutationConfig<typeof categoryService.update>;
};

export const useUpdateCategory = ({ config }: IFuseUpdateCategory = {}) => {
    return useMutation({
        ...config,
        mutationFn: categoryService.update,
    });
};


//------------------ useDeleteCategory hook ----------------------------------
type IFuseDeleteCategory = {
    config?: MutationConfig<typeof categoryService.delete>;
};

export const useDeleteCategory = ({ config }: IFuseDeleteCategory = {}) => {
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(categoryService.NAME);
            notification.success({
                type: "success",
                message: "Category successfully deleted",
            });
        },
        ...config,
        mutationFn: categoryService.delete,
    });
};
