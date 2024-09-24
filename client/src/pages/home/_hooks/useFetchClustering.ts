import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useFetchClustering = (
	mallTypeId: string,
	categoryList: any,
	nClusters: number,
	shouldFetch: boolean,
	setShouldFetch: (boolean) => void,
) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['clustering', mallTypeId, categoryList, nClusters],
		queryFn: () => {
			// 데이터 포맷 확인
			const payload = {
				mallTypeId,
				// categoryList: Array.isArray(categoryList) ? categoryList : [],
				categoryList: categoryList.map((item: any) => item.categoryId),
				nClusters: nClusters || 2, // nClusters는 기본값 설정
			};

			console.log('Sending payload:', payload);

			return httpInterface.getClusterData(payload); // 이 부분이 서버로 전송됨
		},
		enabled: shouldFetch,
	});

	useEffect(() => {
		if (shouldFetch) {
			setShouldFetch(false);
		}
	}, [isLoading]);

	return { data, isLoading, isError };
};
