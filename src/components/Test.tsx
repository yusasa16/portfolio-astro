import { css } from "./styled-system/css";

export default function Test() {
	return <h2 className={css({ bg: "red.400" })}>テスト</h2>;
}
