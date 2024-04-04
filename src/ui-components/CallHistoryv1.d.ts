/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, SearchFieldProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CallHistoryv1OverridesProps = {
    CallHistoryv1?: PrimitiveOverrideProps<ViewProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    CTASection?: PrimitiveOverrideProps<FlexProps>;
    SearchField38602265?: PrimitiveOverrideProps<SearchFieldProps>;
    "Recent Calls"?: PrimitiveOverrideProps<TextProps>;
    "Group 138602267"?: PrimitiveOverrideProps<ViewProps>;
    "Group 13990202"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13990203"?: PrimitiveOverrideProps<IconProps>;
    "Incident Time3990204"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date3990205"?: PrimitiveOverrideProps<TextProps>;
    "Agent Name3990206"?: PrimitiveOverrideProps<TextProps>;
    "Incident Summary3990207"?: PrimitiveOverrideProps<TextProps>;
    Button3990208?: PrimitiveOverrideProps<ButtonProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Group 13990215"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13990216"?: PrimitiveOverrideProps<IconProps>;
    "Incident Time3990226"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date3990218"?: PrimitiveOverrideProps<TextProps>;
    "Agent Name3990219"?: PrimitiveOverrideProps<TextProps>;
    "Incident Summary3990220"?: PrimitiveOverrideProps<TextProps>;
    Button3990221?: PrimitiveOverrideProps<ButtonProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Group 13990172"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13990173"?: PrimitiveOverrideProps<IconProps>;
    "Incident Time3990174"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date3990175"?: PrimitiveOverrideProps<TextProps>;
    "Agent Name3990176"?: PrimitiveOverrideProps<TextProps>;
    "Incident Summary3990177"?: PrimitiveOverrideProps<TextProps>;
    Button3990178?: PrimitiveOverrideProps<ButtonProps>;
    "Group 238602282"?: PrimitiveOverrideProps<ViewProps>;
    "Group 138602283"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 138602284"?: PrimitiveOverrideProps<IconProps>;
    "Incident Time3987234"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date3987233"?: PrimitiveOverrideProps<TextProps>;
    "Agent Name38602285"?: PrimitiveOverrideProps<TextProps>;
    "Incident Summary38602286"?: PrimitiveOverrideProps<TextProps>;
    Button38602287?: PrimitiveOverrideProps<ButtonProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Group 23990182"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13990183"?: PrimitiveOverrideProps<IconProps>;
    "Incident Time3990184"?: PrimitiveOverrideProps<TextProps>;
    "Incident Date3990185"?: PrimitiveOverrideProps<TextProps>;
    "Agent Name3990186"?: PrimitiveOverrideProps<TextProps>;
    "Incident Summary3990187"?: PrimitiveOverrideProps<TextProps>;
    Button3990188?: PrimitiveOverrideProps<ButtonProps>;
    SearchField38602294?: PrimitiveOverrideProps<SearchFieldProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Filter by Date/Time"?: PrimitiveOverrideProps<TextProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CallHistoryv1Props = React.PropsWithChildren<Partial<ViewProps> & {
    agent?: any;
    incident?: any;
} & {
    overrides?: CallHistoryv1OverridesProps | undefined | null;
}>;
export default function CallHistoryv1(props: CallHistoryv1Props): React.ReactElement;
