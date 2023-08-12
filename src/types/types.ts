import React, { ReactNode } from "react";

export type HeaderProps = {
    image: string;
    title: string;
    description: string;
  };

export interface ContentSectionProps{
  children: ReactNode
}