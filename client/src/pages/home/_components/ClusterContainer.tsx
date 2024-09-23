import Card from '@/components/Card';
import ClusteringChart from '@/pages/home/_components/charts/ClusteringChart';
import ImageFilters from '@/pages/imageSearch/_components/ImageFilters';
import ClusterFilter from './filter/ClusterFilter';
import { useImageSearch } from '@/pages/imageSearch/_hooks/useImageSearch';
import { useFilters } from '@/pages/imageSearch/_hooks/useFilters';
import { useClustering } from '../_hooks/useClustering';

export default function ClusterContainer() {
	const {
		mallType,
		categoryList,
		offset,
		data,
		isLoading,
		isError,
		handleMallTypeChange,
		handleCategoryChange,
		handleOffsetChange,
		handleSubmit,
		handleReset,
	} = useClustering();

	console.log(data);
	console.log('mallType', mallType);

	return (
		<Card className="col-span-2 xl:col-span-2 2xl:col-span-3">
			<h3 className="text-xl font-bold text-gray-900 mb-2">상품별 이미지 클러스터링</h3>
			<span className="text-base font-normal text-gray-500">Image Clustering</span>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<ClusteringChart />
				{/* <div className="w-1/2 h-90">필터</div> */}
				{/* <ImageFilters /> */}

				<ClusterFilter
					mallType={mallType}
					categoryList={categoryList}
					offset={offset}
					handleMallTypeChange={handleMallTypeChange}
					handleCategoryChange={handleCategoryChange}
					handleOffsetChange={handleOffsetChange}
				/>
				<div></div>
				<div className="flex justify-end space-x-2">
					<button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={handleReset}>
						초기화
					</button>
					<button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>
						검색
					</button>
				</div>
			</div>
		</Card>
	);
}
