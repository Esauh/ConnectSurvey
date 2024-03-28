/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, RatingProps, SwitchFieldProps, TextAreaFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type UpdatedFeedbackOverridesProps = {
    UpdatedFeedback?: PrimitiveOverrideProps<ViewProps>;
    "Group 10"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField4095297?: PrimitiveOverrideProps<SwitchFieldProps>;
    "DId the customer service representative resolve your issue?"?: PrimitiveOverrideProps<TextProps>;
    "Feedback Survey"?: PrimitiveOverrideProps<TextProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField4095305?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Was the customer service representative knowledgeable?"?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField4095321?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Was your issue resolved in a timely manner?"?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField4095337?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Was it easy to contact and get a hold of a customer service representative?"?: PrimitiveOverrideProps<TextProps>;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField4095345?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Did the customer service representative make you feel valued?"?: PrimitiveOverrideProps<TextProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField4095353?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Were you overall satisfied with the customer service provided?"?: PrimitiveOverrideProps<TextProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Group 14095375"?: PrimitiveOverrideProps<ViewProps>;
    Rating4095376?: PrimitiveOverrideProps<RatingProps>;
    "How would you rate the service given by our customer service representative?"?: PrimitiveOverrideProps<TextProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Group 14095389"?: PrimitiveOverrideProps<ViewProps>;
    Rating4095390?: PrimitiveOverrideProps<RatingProps>;
    "Overall what would you rate the quality of your customer service?"?: PrimitiveOverrideProps<TextProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UpdatedFeedbackProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UpdatedFeedbackOverridesProps | undefined | null;
}>;
export default function UpdatedFeedback(props: UpdatedFeedbackProps): React.ReactElement;
