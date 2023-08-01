import { css } from "../../styled-system/css";

interface TestProps {
	text: string;
}

export default function Test(props: TestProps) {
	return <h2 className={css({ bg: "bg02" })}>{props.text}</h2>;
}
