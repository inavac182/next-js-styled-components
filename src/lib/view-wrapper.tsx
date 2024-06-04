"use client";
import React from "react";

import { UiView } from "@uireact/view";

import { CustomTheme } from './custom-theme';

type ViewWrapperProps = {
  children: React.ReactNode;
};

export const ViewWrapper = ({ children }: ViewWrapperProps) => (
  <UiView theme={CustomTheme} skipFontName>{children}</UiView>
);
