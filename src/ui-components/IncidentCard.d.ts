/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BadgeProps, ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type IncidentCardOverridesProps = {
    IncidentCard?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Incident Summary"?: PrimitiveOverrideProps<TextProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Agent Name"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date"?: PrimitiveOverrideProps<TextProps>;
    "Incident Time"?: PrimitiveOverrideProps<TextProps>;
    Tags?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type IncidentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    incident?: any;
} & {
    overrides?: IncidentCardOverridesProps | undefined | null;
}>;
export default function IncidentCard(props: IncidentCardProps): React.ReactElement;
