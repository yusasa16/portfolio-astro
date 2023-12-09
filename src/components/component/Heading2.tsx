import { css } from '@styled-system/css';

interface Heading2Props {
	text: string;
	level?: number;
}

export default function Heading2(props: Heading2Props) {
	return (
		<h2
			className={css({
				textAlign: 'center',
				fontSize: '2.4rem',
				fontWeight: 'bold',
			})}
		>
			{props.text}
		</h2>
	);
}
