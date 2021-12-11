import { IBaseFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { UserService } from "@shared/services";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";

// useUsers hooks
type IFuseUsers = {
    options: IBaseFilter;
    config?: QueryConfig<typeof UserService.filter>;
};
export const useUsers = ({ options, config }: IFuseUsers) => {
    return useQuery({
        ...config,
        queryKey: [UserService.NAME, UserService.filterById.name],
        queryFn: () => UserService.filter(options),
    });
};

// use user hook
type IFuseUser = {
    id: string;
    config?: QueryConfig<typeof UserService.filterById>;
};

export const useUser = ({ id, config }: IFuseUser) => {
    return useQuery({
        ...config,
        queryFn: () => UserService.filterById(id),
    });
};

// useCreateUser hook
type IFuseCreateUser = {
    config?: MutationConfig<typeof UserService.create>;
};

export const useCreateUser = ({ config }: IFuseCreateUser = {}) => {
    return useMutation({
        ...config,
        mutationFn: UserService.create,
    });
};

// useUpdateUser hook
type IFuseUpdateUser = {
    config?: MutationConfig<typeof UserService.update>;
};

export const useUpdateUser = ({ config }: IFuseUpdateUser = {}) => {
    return useMutation({
        ...config,
        mutationFn: UserService.update,
    });
};

type IFuseDeleteUser = {
    config?: MutationConfig<typeof UserService.delete>;
};

export const useDeleteUser = ({ config }: IFuseDeleteUser = {}) => {
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(UserService.NAME);
            notification.success({
                type: "success",
                message: "User Deleted",
            });
        },
        ...config,
        mutationFn: UserService.delete,
    });
};
