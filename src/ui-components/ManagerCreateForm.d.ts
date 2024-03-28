/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ManagerCreateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
};
export declare type ManagerCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManagerCreateFormOverridesProps = {
    ManagerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManagerCreateFormProps = React.PropsWithChildren<{
    overrides?: ManagerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ManagerCreateFormInputValues) => ManagerCreateFormInputValues;
    onSuccess?: (fields: ManagerCreateFormInputValues) => void;
    onError?: (fields: ManagerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ManagerCreateFormInputValues) => ManagerCreateFormInputValues;
    onValidate?: ManagerCreateFormValidationValues;
} & React.CSSProperties>;
export default function ManagerCreateForm(props: ManagerCreateFormProps): React.ReactElement;
