export type blogType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	eyecatch: {
		url: string;
		height: number;
		width: number;
	};
	category: {
		id: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		revisedAt: string;
		name: string;
	};
};

export type blogListType = {
	contents: blogType[];
};
