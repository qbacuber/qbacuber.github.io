import * as Icons from "../icons/icons"

export interface WidgetProps  {
  type: string;
  text: string;
  link?: string;
  iconName?: keyof typeof Icons;
}

export interface OnlyIconProps {
  iconName?: keyof typeof Icons;
  alt: string;
}

export interface IconWithLinkProps {
  alt: string;
  iconName?: keyof typeof Icons;
  link?: string;
}

export interface TextWithLinkProps {
  text: string;
  link?: string;
}

export interface EmailAndBioProps {
  text: string;
}