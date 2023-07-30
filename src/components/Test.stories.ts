import type { Meta, StoryObj } from "@storybook/react";
import Test from "./Test";

const meta = {
	title: "main/Test",
	component: Test,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		layout: "fullscreen",
	},
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
	args: {
		text: "テスト",
	},
};
