/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type FeedbackErrorOverridesProps = {
    FeedbackError?: PrimitiveOverrideProps<FlexProps>;
    frame?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<FlexProps>;
    heading?: PrimitiveOverrideProps<TextProps>;
    body?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FeedbackErrorProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeedbackErrorOverridesProps | undefined | null;
}>;
export default function FeedbackError(props: FeedbackErrorProps): React.ReactElement;
