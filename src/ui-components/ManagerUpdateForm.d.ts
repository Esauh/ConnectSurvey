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
export declare type ManagerUpdateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
};
export declare type ManagerUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManagerUpdateFormOverridesProps = {
    ManagerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManagerUpdateFormProps = React.PropsWithChildren<{
    overrides?: ManagerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    manager?: any;
    onSubmit?: (fields: ManagerUpdateFormInputValues) => ManagerUpdateFormInputValues;
    onSuccess?: (fields: ManagerUpdateFormInputValues) => void;
    onError?: (fields: ManagerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ManagerUpdateFormInputValues) => ManagerUpdateFormInputValues;
    onValidate?: ManagerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ManagerUpdateForm(props: ManagerUpdateFormProps): React.ReactElement;
