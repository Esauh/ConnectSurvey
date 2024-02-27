/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, RatingProps, SwitchFieldProps, TextAreaFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type FeedbackSurveyOverridesProps = {
    FeedbackSurvey?: PrimitiveOverrideProps<ViewProps>;
    CTASection?: PrimitiveOverrideProps<FlexProps>;
    TextAreaField38602592?: PrimitiveOverrideProps<TextAreaFieldProps>;
    TextAreaField38602593?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Group 138602595"?: PrimitiveOverrideProps<ViewProps>;
    Rating38602596?: PrimitiveOverrideProps<RatingProps>;
    "Overall what would you rate the quality of your customer service?"?: PrimitiveOverrideProps<TextProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Group 138602599"?: PrimitiveOverrideProps<ViewProps>;
    Rating38602600?: PrimitiveOverrideProps<RatingProps>;
    "How would you rate the service given by our customer service representative?"?: PrimitiveOverrideProps<TextProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField38602603?: PrimitiveOverrideProps<SwitchFieldProps>;
    "DId the customer service representative resolve your issue?"?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField38602606?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Was your issue resolved in a timely manner?"?: PrimitiveOverrideProps<TextProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField38602609?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Was the customer service representative knowledgeable?"?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField38602613?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Was it easy to contact and get a hold of a customer service representative?"?: PrimitiveOverrideProps<TextProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField38602616?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Were you overall satisfied with the customer service provided?"?: PrimitiveOverrideProps<TextProps>;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField38602619?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Did the customer service representative make you feel valued?"?: PrimitiveOverrideProps<TextProps>;
    "Feedback Survey"?: PrimitiveOverrideProps<TextProps>;
    Button38602622?: PrimitiveOverrideProps<ButtonProps>;
    Button38602623?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FeedbackSurveyProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeedbackSurveyOverridesProps | undefined | null;
}>;
export default function FeedbackSurvey(props: FeedbackSurveyProps): React.ReactElement;
