import { css } from "../../styled-system/css";

interface TestProps {
	text: string;
}

export default function Test(props: TestProps) {
	return <h2 className={css({ bg: "red.400" })}>{props.text}</h2>;
}
