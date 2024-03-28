/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Group11OverridesProps = {
    Group11?: PrimitiveOverrideProps<ViewProps>;
    "Group 10"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Voice Feedback Survey"?: PrimitiveOverrideProps<TextProps>;
    "Thank you for choosing Amazon Connect Customer Service. We value your feedback to enhance our services. Please leave a brief message sharing your experience with us. Your input is invaluable in helping us serve you better. Thank you for taking the time to connect with us."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Group11Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group11OverridesProps | undefined | null;
}>;
export default function Group11(props: Group11Props): React.ReactElement;
