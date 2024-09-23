import { useState } from 'react';
import Chart from 'react-apexcharts';

export default function ClusteringChart() {
	const [hoveredStyleId, setHoveredStyleId] = useState<string | null>(null);

	// const { data: tooltipData, isLoading } = useFetchTooltipData(hoveredStyleId);

	const data = [
		{
			styleId: '4126979',
			x: 16.4,
			y: 5.4,
			cluster: 0,
		},
		{
			styleId: '4126027',
			x: 21.7,
			y: 2,
			cluster: 1,
		},
		// 더 많은 데이터...
	];

	// 데이터 가공
	const series = data.reduce(
		(acc, curr) => {
			const point = {
				x: curr.x,
				y: curr.y,
				productId: curr.styleId,
				cluster: curr.cluster,
			};

			if (acc[curr.cluster]) {
				acc[curr.cluster].data.push(point);
			} else {
				acc[curr.cluster] = {
					name: `Cluster ${curr.cluster}`,
					data: [point],
				};
			}

			return acc;
		},
		[] as { name: string; data: any[] }[],
	);

	const options = {
		chart: {
			height: 350,
			type: 'scatter' as const,
			zoom: {
				enabled: true,
				type: 'xy' as const,
			},
			events: {
				dataPointSelection: function (event, chartContext, config) {
					const data = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
					alert(`상품 ID: ${data.productId}, 상품 이름: ${data.productName}`);
					// 여기에 원하는 방식으로 상품 정보 표시 기능을 추가할 수 있습니다.
				},
			},
		},
		tooltip: {
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				const data = w.config.series[seriesIndex].data[dataPointIndex];
				return `<div class="tooltip-box p-10">
                  <strong>상품 이름:</strong> ${data.productName} <br/>
                  <strong>브랜드:</strong> ${data.brand} <br/>
                </div>`;
			},
		},
		xaxis: {
			tickAmount: 10,
			labels: {
				formatter: function (val) {
					return parseFloat(val).toFixed(1);
				},
			},
		},
		yaxis: {
			tickAmount: 7,
		},
	};

	return (
		<div className="flex justify-center w-full mt-6">
			<div className="w-full">
				<Chart options={options} series={series} type="scatter" height={570} width="100%" />
			</div>
		</div>
	);
}
