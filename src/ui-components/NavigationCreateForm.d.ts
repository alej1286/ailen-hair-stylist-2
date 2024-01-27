/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type NavigationCreateFormInputValues = {
    name?: string;
    href?: string;
    current?: boolean;
};
export declare type NavigationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    href?: ValidationFunction<string>;
    current?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationCreateFormOverridesProps = {
    NavigationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    href?: PrimitiveOverrideProps<TextFieldProps>;
    current?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type NavigationCreateFormProps = React.PropsWithChildren<{
    overrides?: NavigationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NavigationCreateFormInputValues) => NavigationCreateFormInputValues;
    onSuccess?: (fields: NavigationCreateFormInputValues) => void;
    onError?: (fields: NavigationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NavigationCreateFormInputValues) => NavigationCreateFormInputValues;
    onValidate?: NavigationCreateFormValidationValues;
} & React.CSSProperties>;
export default function NavigationCreateForm(props: NavigationCreateFormProps): React.ReactElement;
