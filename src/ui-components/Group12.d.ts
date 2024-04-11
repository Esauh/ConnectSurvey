/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Group11Props } from "./Group11";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type Group12OverridesProps = {
    Group12?: PrimitiveOverrideProps<ViewProps>;
    "Group 11"?: Group11Props;
} & EscapeHatchProps;
export declare type Group12Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group12OverridesProps | undefined | null;
}>;
export default function Group12(props: Group12Props): React.ReactElement;
