import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { EmptyState } from "./EmptyState";
export default {
  title: "Components/EmptyState",
  component: EmptyState,
} as Meta<typeof EmptyState>;

const Template: StoryFn<typeof EmptyState> = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});
Default.args = {};
