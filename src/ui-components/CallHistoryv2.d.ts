/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Agent, Incident } from "../models";
import { CTASectionProps } from "./CTASection";
import { ButtonProps, IconProps, SearchFieldProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CallHistoryv2OverridesProps = {
    CallHistoryv2?: PrimitiveOverrideProps<ViewProps>;
    "Base Group"?: PrimitiveOverrideProps<ViewProps>;
    CTASection?: CTASectionProps;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Recent Calls"?: PrimitiveOverrideProps<TextProps>;
    "Group 6 Parent"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 140371065"?: PrimitiveOverrideProps<IconProps>;
    "Chat FB Button40371068"?: PrimitiveOverrideProps<ButtonProps>;
    "Voice FB Button4066342"?: PrimitiveOverrideProps<ButtonProps>;
    "Incident Time4066366"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date4066367"?: PrimitiveOverrideProps<TextProps>;
    "Agent Name4066368"?: PrimitiveOverrideProps<TextProps>;
    "Incident Summary4066369"?: PrimitiveOverrideProps<TextProps>;
    "Group 4 Parent"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 140371048"?: PrimitiveOverrideProps<IconProps>;
    "Chat FB Button40371051"?: PrimitiveOverrideProps<ButtonProps>;
    "Voice FB Button4066338"?: PrimitiveOverrideProps<ButtonProps>;
    "Incident Time4066362"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date4066363"?: PrimitiveOverrideProps<TextProps>;
    "Agent Name4066364"?: PrimitiveOverrideProps<TextProps>;
    "Incident Summary4066365"?: PrimitiveOverrideProps<TextProps>;
    "Group 3 Parent"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 140371053"?: PrimitiveOverrideProps<IconProps>;
    "Chat FB Button40371056"?: PrimitiveOverrideProps<ButtonProps>;
    "Voice FB Button4066346"?: PrimitiveOverrideProps<ButtonProps>;
    "Incident Time4066358"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date4066359"?: PrimitiveOverrideProps<TextProps>;
    "Agent Name4066360"?: PrimitiveOverrideProps<TextProps>;
    "Incident Summary4066361"?: PrimitiveOverrideProps<TextProps>;
    "Group 2 Parent"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 140371043"?: PrimitiveOverrideProps<IconProps>;
    "Incident Time4066354"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date4066355"?: PrimitiveOverrideProps<TextProps>;
    "Agent Name4066356"?: PrimitiveOverrideProps<TextProps>;
    "Incident Summary4066357"?: PrimitiveOverrideProps<TextProps>;
    "Chat FB Button40371046"?: PrimitiveOverrideProps<ButtonProps>;
    "Voice FB Button4066334"?: PrimitiveOverrideProps<ButtonProps>;
    "Group 1 Parent"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 140371059"?: PrimitiveOverrideProps<IconProps>;
    "Chat FB Button40371062"?: PrimitiveOverrideProps<ButtonProps>;
    "Voice FB Button4066330"?: PrimitiveOverrideProps<ButtonProps>;
    "Incident Time4066350"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date4066351"?: PrimitiveOverrideProps<TextProps>;
    "Agent Name4066352"?: PrimitiveOverrideProps<TextProps>;
    "Incident Summary4066353"?: PrimitiveOverrideProps<TextProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Date/Time Filter Group"?: PrimitiveOverrideProps<ViewProps>;
    "Filter by Date/Time"?: PrimitiveOverrideProps<TextProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CallHistoryv2Props = React.PropsWithChildren<Partial<ViewProps> & {
    agent?: Agent;
    incident?: Incident;
} & {
    overrides?: CallHistoryv2OverridesProps | undefined | null;
}>;
export default function CallHistoryv2(props: CallHistoryv2Props): React.ReactElement;
