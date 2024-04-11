/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LandingPageProps } from "./LandingPage";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type EndingPagev1OverridesProps = {
    EndingPagev1?: PrimitiveOverrideProps<FlexProps>;
    LandingPage?: LandingPageProps;
} & EscapeHatchProps;
export declare type EndingPagev1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EndingPagev1OverridesProps | undefined | null;
}>;
export default function EndingPagev1(props: EndingPagev1Props): React.ReactElement;
