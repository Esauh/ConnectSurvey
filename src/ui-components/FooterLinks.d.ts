/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type FooterLinksOverridesProps = {
    FooterLinks?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    Navigation?: PrimitiveOverrideProps<TextProps>;
    "Frame 40539681154"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    "Nav Links"?: PrimitiveOverrideProps<TextProps>;
    "Landing Page"?: PrimitiveOverrideProps<TextProps>;
    "Recent Calls"?: PrimitiveOverrideProps<TextProps>;
    "Frame 40539681159"?: PrimitiveOverrideProps<FlexProps>;
    "Reach Out"?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    Github?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterLinksProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FooterLinksOverridesProps | undefined | null;
}>;
export default function FooterLinks(props: FooterLinksProps): React.ReactElement;
