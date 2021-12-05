import { IBaseFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { UsersService } from "@shared/services";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";

// useUsers hooks
type IFuseUsers = {
    options: IBaseFilter;
    config?: QueryConfig<typeof UsersService.filter>;
};
export const useUsers = ({ options, config }: IFuseUsers) => {
    return useQuery({
        ...config,
        queryKey: [UsersService.NAME, UsersService.filterByID.name],
        queryFn: () => UsersService.filter(options),
    });
};

// use user hook
type IFuseUser = {
    id: string;
    config?: QueryConfig<typeof UsersService.filterByID>;
};

export const useUser = ({ id, config }: IFuseUser) => {
    return useQuery({
        ...config,
        queryFn: () => UsersService.filterByID(id),
    });
};

// useCreateUser hook
type IFuseCreateUser = {
    config?: MutationConfig<typeof UsersService.create>;
};

export const useCreateUser = ({ config }: IFuseCreateUser = {}) => {
    return useMutation({
        ...config,
        mutationFn: UsersService.create,
    });
};

// useUpdateUser hook
type IFuseUpdateUser = {
    config?: MutationConfig<typeof UsersService.update>;
};

export const useUpdateUser = ({ config }: IFuseUpdateUser = {}) => {
    return useMutation({
        ...config,
        mutationFn: UsersService.update,
    });
};

type IFuseDeleteUser = {
    config?: MutationConfig<typeof UsersService.delete>;
};

export const useDeleteUser = ({ config }: IFuseDeleteUser = {}) => {
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(UsersService.NAME);
            notification.success({
                type: "success",
                message: "User Deleted",
            });
        },
        ...config,
        mutationFn: UsersService.delete,
    });
};
