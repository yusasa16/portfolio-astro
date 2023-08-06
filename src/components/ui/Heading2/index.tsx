import { css } from "../../../../styled-system/css";

interface Heading2Props {
	mainText: string[];
	subText?: string;
}

export default function Heading2(props: Heading2Props) {
	return (
		<div className={css({ textAlign: "center" })}>
			<span className={subTextCss}>{props.subText}</span>
			<h2 className={mainTextCss}>
				{props.mainText.map((text) => {
					return <span className={css({ display: "block" })}>{text}</span>;
				})}
			</h2>
		</div>
	);
}

const subTextCss = css({
	display: "block",
	color: "textDarkAccent",
	fontSize: "1.6rem",
	lineHeight: "calc(32/16)",
});

const mainTextCss = css({
	color: "textDark",
	fontSize: "4rem",
	fontWeight: "900",
	lineHeight: "calc(48/40)",
	md: {
		fontSize: "5.6rem",
		lineHeight: "calc(64/56)",
	},
});
