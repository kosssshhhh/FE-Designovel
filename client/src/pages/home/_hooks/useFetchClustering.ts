import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';

interface ClusterData {
	x: number;
	y: number;
	styleId: string;
}

export const useFetchClustering = (mallTypeId: string, categoryList: any, nclusters: number, shouldFetch: boolean) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['clustering', mallTypeId, categoryList, nclusters],
		queryFn: () => {
			// 데이터 포맷 확인
			const payload = {
				mallTypeId,
				categoryList: Array.isArray(categoryList) ? categoryList : [],
				nclusters: nclusters || 2, // nclusters는 기본값 설정
			};

			console.log('Sending payload:', payload);

			return httpInterface.getClusterData(payload); // 이 부분이 서버로 전송됨
		},
		enabled: shouldFetch,
	});
	return { data, isLoading, isError };
};
