import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';

export const useFetchClusterDetail = (mallTypeId: string, styleId: string) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['clusterDetail', mallTypeId, styleId],
		queryFn: () => {
			return httpInterface.getClusterDetailData(mallTypeId, styleId);
		},
		enabled: !!mallTypeId && !!styleId,
	});
	return { DetailData: data?.data, DetailIsLoading: isLoading, isError };
};
