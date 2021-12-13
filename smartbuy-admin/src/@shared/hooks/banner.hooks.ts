import { IBaseFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";
import { BannerService } from "@shared/services";



//---------------- useBanners hook ------------------------------------
type IFuseBanners = {
    options: IBaseFilter;
    config?: QueryConfig<typeof BannerService.filter>;
};
export const useBanners = ({ options, config }: IFuseBanners) => {
    return useQuery({
        ...config,
        queryKey: [BannerService.NAME, BannerService.filterById.name],
        queryFn: () => BannerService.filter(options),
    });
};



//----------------------- useBanner hook --------------------------------------
type IFuseBanner = {
    id: string;
    config?: QueryConfig<typeof BannerService.filterById>;
};

export const useBanner = ({ id, config }: IFuseBanner) => {
    return useQuery({
        ...config,
        queryFn: () => BannerService.filterById(id),
    });
};


//------------------ useCreateBanner hook ---------------------------------
type IFuseCreateBanner = {
    config?: MutationConfig<typeof BannerService.create>;
};

export const useCreateBanner = ({ config }: IFuseCreateBanner = {}) => {
    return useMutation({
        ...config,
        mutationFn: BannerService.create,
    });
};



//------------------ useUpdateBanner hook ----------------------------------
type IFuseUpdateBanner = {
    config?: MutationConfig<typeof BannerService.update>;
};

export const useUpdateBanner = ({ config }: IFuseUpdateBanner = {}) => {
    return useMutation({
        ...config,
        mutationFn: BannerService.update,
    });
};


//------------------ useDeleteBanner hook ----------------------------------
type IFuseDeleteBanner = {
    config?: MutationConfig<typeof BannerService.delete>;
};

export const useDeleteBanner = ({ config }: IFuseDeleteBanner = {}) => {
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(BannerService.NAME);
            notification.success({
                type: "success",
                message: "Banner successfully deleted",
            });
        },
        ...config,
        mutationFn: BannerService.delete,
    });
};
