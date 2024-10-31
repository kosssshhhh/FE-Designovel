import { sidebarListType } from '@/layout/_types/type';

export const SIDEBAR_ITEMS: sidebarListType[] = [
	{
		title: '홈',
		href: '/',
		svgName: 'home',
	},
	{
		title: '스타일',
		href: '/style?page=1',
		svgName: 'user',
	},
	{
		title: '이미지 검색',
		href: '/imageSearch',
		svgName: 'search',
	},
];
