import { IBaseFilter } from "@shared/interfaces";
import { PaymentMethodService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type IProps = {
	options?: IBaseFilter
	config?: QueryConfig<typeof PaymentMethodService.filter>
}

export const usePaymentMethods = ({ options={}, config={} }: IProps) => {
	const KEY = `${PaymentMethodService.NAME}${PaymentMethodService.getById.name}`
	return useQuery({
		...config,
		queryKey: [KEY, options],
		queryFn: () => PaymentMethodService.filter(options),
	})
}