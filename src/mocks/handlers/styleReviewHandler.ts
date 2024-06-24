import { http, HttpResponse, delay } from 'msw';

const styleReviewHandler = [
	http.get('/style/details/review/:mallType', async () => {
		await delay(300);
		return HttpResponse.json({
			review: {
				content: [
					{
						reviewId: 169380,
						styleId: 'MN2E5WJC483W',
						orgReviewId: '13219702',
						rate: 5,
						writtenDate: '2024-06-07',
						userId: 'ysi**************',
						body: '정말 마음에 들어서 사진 후기 올리네요. 어깨있는 55라 보통 여유있게 66 입는데 사이즈 66 적당하게 잘 맞습니다. 단추도 예쁘고 색상도 사진보다 컬러감 다양하고 고급스럽습니다. 매칭하는 옷에 따라 다양하게 입을 수 있을 것 같아요.',
						styleColor: 'NEUTRAL',
						styleSize: '88',
						importSource: '더한섬닷컴 마인',
						userHeight: 160,
						userSize: 66,
					},
					{
						reviewId: 169381,
						styleId: 'MN2E5WJC483W',
						orgReviewId: '13219432',
						rate: 5,
						writtenDate: '2024-06-07',
						userId: 'gir****',
						body: '너무 이뻐요, 갖춰 입는 곳에 입고 가기 좋을 것 같아요.',
						styleColor: 'NEUTRAL',
						styleSize: '76',
						importSource: '더한섬닷컴 마인',
						userHeight: 160,
						userSize: 44,
					},
					{
						reviewId: 169382,
						styleId: 'MN2E5WJC483W',
						orgReviewId: '13219062',
						rate: 4,
						writtenDate: '2024-06-07',
						userId: 'sub***************************************',
						body: '상품하자로 교환했는데 이것도 누가 입었던지 소매에 구김이 있네요. 처음엔 뭔가 했는데 입어보니 소매 움직임에 의한 구김이예요. 옷은 이뻐요.',
						styleColor: 'NEUTRAL',
						styleSize: '82',
						importSource: '더한섬닷컴 마인',
						userHeight: null,
						userSize: 44,
					},
					{
						reviewId: 50195,
						styleId: 'MN2E5WJC483W',
						orgReviewId: '13213052',
						rate: 5,
						writtenDate: '2024-06-06',
						userId: 'bih*****************',
						body: '컬러가 생각보다 어둡긴한데 깔끔한 디자인에 핏이 좋아요 ',
						styleColor: 'NEUTRAL',
						styleSize: '82',
						importSource: '더한섬닷컴 마인',
						userHeight: null,
						userSize: null,
					},
					{
						reviewId: 50196,
						styleId: 'MN2E5WJC483W',
						orgReviewId: '13212553',
						rate: 5,
						writtenDate: '2024-06-06',
						userId: 'don******************',
						body: '소재 좋고, 차려입은 느낌도 나고, 꾸안꾸로 입기도 좋고 잘 입어보렵니다 ',
						styleColor: 'NEUTRAL',
						styleSize: '82',
						importSource: '더한섬닷컴 마인',
						userHeight: 160,
						userSize: 55,
					},
					{
						reviewId: 50197,
						styleId: 'MN2E5WJC483W',
						orgReviewId: '13208502',
						rate: 5,
						writtenDate: '2024-06-05',
						userId: 'ljy**************',
						body: '화면보다 훨씬 예뻐요\n맘에 들어요',
						styleColor: 'NEUTRAL',
						styleSize: '82',
						importSource: '더한섬닷컴 마인',
						userHeight: null,
						userSize: 55,
					},
					{
						reviewId: 50198,
						styleId: 'MN2E5WJC483W',
						orgReviewId: '13203902',
						rate: 5,
						writtenDate: '2024-06-04',
						userId: 'dud*****',
						body: '넘 예쁜 자켓이에요~\n자켓을 많이 구입해서. .이건 넘 어가려고 했는데. . \n카라없이 브이넥이라. . 더 시원하고 가볍네요~\n최근 자케중. . 왜 이게.젤 맘에 드는거죠?ㅎ ㅎ',
						styleColor: 'NEUTRAL',
						styleSize: '82',
						importSource: '더한섬닷컴 마인',
						userHeight: 163,
						userSize: 55,
					},
					{
						reviewId: 50199,
						styleId: 'MN2E5WJC483W',
						orgReviewId: '13201592',
						rate: 5,
						writtenDate: '2024-06-03',
						userId: 'hsk******',
						body: '이뻐요~ 단추 잠그면 단정해요\n슴가있어서 살빠질때까지 오픈해야할듯 :)',
						styleColor: 'NEUTRAL',
						styleSize: '82',
						importSource: '더한섬닷컴 마인',
						userHeight: 168,
						userSize: 55,
					},
					{
						reviewId: 50200,
						styleId: 'MN2E5WJC483W',
						orgReviewId: '13197292',
						rate: 5,
						writtenDate: '2024-06-02',
						userId: 'neu*',
						body: '아주 매우 진짜 정말 맘에 쏙 듭니다',
						styleColor: 'NEUTRAL',
						styleSize: '88',
						importSource: '더한섬닷컴 마인',
						userHeight: 163,
						userSize: 66,
					},
					{
						reviewId: 50201,
						styleId: 'MN2E5WJC483W',
						orgReviewId: '13196222',
						rate: 5,
						writtenDate: '2024-06-02',
						userId: 'yra****',
						body: '평소 상의는 55를 입는데, 여유있게 입으려고 88로 주문했어요. 단추 채우고 입었을 때 단정해서 예쁩니다. 단지, 옷감 자체 짜임이 여러실이 섞여 있다 보니, 짜임이 고르지 않아 실이 튀어나온 부분이 군데군데 보여요. 교환할까 하다가 옷감 자체 특성인 것 같아 그냥 입네요. ',
						styleColor: 'NEUTRAL',
						styleSize: '88',
						importSource: '더한섬닷컴 마인',
						userHeight: 170,
						userSize: 55,
					},
				],
				pageable: {
					pageNumber: 0,
					pageSize: 10,
					sort: {
						empty: true,
						sorted: false,
						unsorted: true,
					},
					offset: 0,
					paged: true,
					unpaged: false,
				},
				last: false,
				totalPages: 3,
				totalElements: 29,
				size: 10,
				number: 0,
				sort: {
					empty: true,
					sorted: false,
					unsorted: true,
				},
				first: true,
				numberOfElements: 10,
				empty: false,
			},
			count: {
				rate1: 0,
				rate2: 0,
				rate3: 0,
				rate4: 3,
				rate5: 26,
				total: 29,
			},
		});
	}),
];

export default styleReviewHandler;
