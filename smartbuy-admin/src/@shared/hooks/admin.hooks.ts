import { IBaseFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { AdminService } from "@shared/services";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";

// useAdmins hooks
type IFuseAdmins = {
    options: IBaseFilter;
    config?: QueryConfig<typeof AdminService.filter>;
};
export const useAdmins = ({ options, config }: IFuseAdmins) => {
    return useQuery({
        ...config,
        queryKey: [AdminService.NAME, AdminService.filterById.name],
        queryFn: () => AdminService.filter(options),
    });
};

// use Admin hook
type IFuseAdmin = {
    id: string;
    config?: QueryConfig<typeof AdminService.filterById>;
};

export const useAdmin = ({ id, config }: IFuseAdmin) => {
    return useQuery({
        ...config,
        queryFn: () => AdminService.filterById(id),
    });
};

// useCreateAdmin hook
type IFuseCreateAdmin = {
    config?: MutationConfig<typeof AdminService.create>;
};

export const useCreateAdmin = ({ config }: IFuseCreateAdmin = {}) => {
    return useMutation({
        ...config,
        mutationFn: AdminService.create,
    });
};

// useUpdateAdmin hook
type IFuseUpdateAdmin = {
    config?: MutationConfig<typeof AdminService.update>;
};

export const useUpdateAdmin = ({ config }: IFuseUpdateAdmin = {}) => {
    return useMutation({
        ...config,
        mutationFn: AdminService.update,
    });
};

type IFuseDeleteAdmin = {
    config?: MutationConfig<typeof AdminService.delete>;
};

export const useDeleteAdmin = ({ config }: IFuseDeleteAdmin = {}) => {
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(AdminService.NAME);
            notification.success({
                type: "success",
                message: "Admin deleted successfully",
            });
        },
        ...config,
        mutationFn: AdminService.delete,
    });
};
