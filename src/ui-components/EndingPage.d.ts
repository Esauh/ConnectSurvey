/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EndingPageOverridesProps = {
    EndingPage?: PrimitiveOverrideProps<ViewProps>;
    "Landing Page"?: PrimitiveOverrideProps<FlexProps>;
    HeroLayout1?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Eyebrow?: PrimitiveOverrideProps<TextProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Right?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Alert?: PrimitiveOverrideProps<FlexProps>;
    "\uD83D\uDD12Icon39011144"?: PrimitiveOverrideProps<IconProps>;
    frame?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<FlexProps>;
    heading?: PrimitiveOverrideProps<TextProps>;
    body?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon39011149"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type EndingPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EndingPageOverridesProps | undefined | null;
}>;
export default function EndingPage(props: EndingPageProps): React.ReactElement;
