export async function get() {
	return {
		body: JSON.stringify([
			{
				title: 'アコーディオン',
				url: '/coding-patterns/accordion/',
				thumbnail: 'https://placehold.jp/528x344.png',
			},
			{
				title: 'タブ',
				url: '/coding-patterns/tab/',
				thumbnail: 'https://placehold.jp/528x344.png',
			},
			{
				title: 'ハンバーガーメニュー',
				url: '/coding-patterns/hamburger-menu/',
				thumbnail: 'https://placehold.jp/528x344.png',
			},
		]),
	};
}
