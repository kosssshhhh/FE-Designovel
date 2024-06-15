import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { renderStars } from '@/utils/renderStars';
import { Count } from '@/pages/styleDetail/_types/stylesReview.type';

interface ReviewFilterProps {
	reviewCount: Count;
}

const filterOptions = [
	{ label: 'Newest', value: '' },
	{
		label: 'Latest Month',
		value: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('T')[0],
	},
	{ label: '3 Months', value: new Date(new Date().setMonth(new Date().getMonth() - 3)).toISOString().split('T')[0] },
	{ label: '6 Months', value: new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString().split('T')[0] },
	{
		label: '12 Months',
		value: new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().split('T')[0],
	},
];

const ReviewFilter = ({ reviewCount }: ReviewFilterProps) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [selectedDateFilter, setSelectedDateFilter] = useState<string>(searchParams.get('startDate') || '');
	const [selectedStarFilters, setSelectedStarFilters] = useState<number[]>(
		searchParams.getAll('rate').map(Number) || [],
	);

	useEffect(() => {
		const date = searchParams.get('startDate') || '';
		const rate = searchParams.getAll('rate').map(Number);

		setSelectedDateFilter(date);
		setSelectedStarFilters(rate);
	}, [searchParams]);

	const handleDateFilterClick = (filterValue: string) => {
		const params = new URLSearchParams(searchParams);
		if (filterValue) {
			params.set('startDate', filterValue);
		} else {
			params.delete('startDate');
		}
		setSearchParams(params);
	};

	const handleStarFilterClick = (rating: number) => {
		const params = new URLSearchParams(searchParams);
		const currentStars = params.getAll('rate').map(Number);
		if (currentStars.includes(rating)) {
			params.delete('rate');
			currentStars.filter((star) => star !== rating).forEach((star) => params.append('rate', star.toString()));
		} else {
			params.append('rate', rating.toString());
		}
		setSearchParams(params);
	};

	return (
		<div className="mb-5">
			<div className="flex space-x-2 mb-4">
				{filterOptions.map((filter, index) => (
					<div
						key={index}
						onClick={() => handleDateFilterClick(filter.value)}
						className={`cursor-pointer p-2 text-sm ${
							selectedDateFilter === filter.value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
						} rounded`}>
						{filter.label}
					</div>
				))}
			</div>
			<div className="flex space-x-2">
				<div className="p-3 rounded bg-gray-200">{reviewCount.total} Review</div>
				{[1, 2, 3, 4, 5].map((rating, index) => {
					const key = `rate${rating}` as keyof Count;
					return (
						<div
							key={index}
							onClick={() => handleStarFilterClick(rating)}
							className={`cursor-pointer p-3 rounded flex items-center justify-center ${
								selectedStarFilters.includes(rating) ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'
							}`}>
							<div className="flex items-center">
								{renderStars(rating)}
								<span className="ml-2">({reviewCount[key]})</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ReviewFilter;
