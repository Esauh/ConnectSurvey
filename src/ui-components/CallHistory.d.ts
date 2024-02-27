/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, SearchFieldProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CallHistoryOverridesProps = {
    CallHistory?: PrimitiveOverrideProps<ViewProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    CTASection?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Recent Calls"?: PrimitiveOverrideProps<TextProps>;
    "Group 138602267"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 138602268"?: PrimitiveOverrideProps<IconProps>;
    "Agent ID: 67895 Date/Time: 11/29/2023 | 5:02 pm"?: PrimitiveOverrideProps<TextProps>;
    "Sally, Sue"?: PrimitiveOverrideProps<TextProps>;
    Button38602271?: PrimitiveOverrideProps<ButtonProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 138602273"?: PrimitiveOverrideProps<IconProps>;
    "Agent ID: 12156 Date/Time: 11/25/2023 | 9:42 am"?: PrimitiveOverrideProps<TextProps>;
    "Richard, Jones"?: PrimitiveOverrideProps<TextProps>;
    Button38602276?: PrimitiveOverrideProps<ButtonProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 138602278"?: PrimitiveOverrideProps<IconProps>;
    "Agent ID: 90845 Date/Time: 11/28/2023 | 7:37 am"?: PrimitiveOverrideProps<TextProps>;
    "Victoria, Smith"?: PrimitiveOverrideProps<TextProps>;
    Button38602281?: PrimitiveOverrideProps<ButtonProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Group 138602283"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 138602284"?: PrimitiveOverrideProps<IconProps>;
    "Agent ID: 31228 Date/Time: 12/01/2023 | 3:42 pm"?: PrimitiveOverrideProps<TextProps>;
    "John, Doe"?: PrimitiveOverrideProps<TextProps>;
    Button38602287?: PrimitiveOverrideProps<ButtonProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Group 138602289"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 138602290"?: PrimitiveOverrideProps<IconProps>;
    "Agent ID: 09834 Date/Time: 10/12/2023 | 11:34 am"?: PrimitiveOverrideProps<TextProps>;
    "Christopher, Lewis"?: PrimitiveOverrideProps<TextProps>;
    Button38602293?: PrimitiveOverrideProps<ButtonProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Filter by Date/Time"?: PrimitiveOverrideProps<TextProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CallHistoryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CallHistoryOverridesProps | undefined | null;
}>;
export default function CallHistory(props: CallHistoryProps): React.ReactElement;
