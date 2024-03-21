/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type NavHeaderOverridesProps = {
    NavHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    "Landing Page"?: PrimitiveOverrideProps<TextProps>;
    "Recent Calls"?: PrimitiveOverrideProps<TextProps>;
    "Contact Us"?: PrimitiveOverrideProps<TextProps>;
    User?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavHeaderOverridesProps | undefined | null;
}>;
export default function NavHeader(props: NavHeaderProps): React.ReactElement;
