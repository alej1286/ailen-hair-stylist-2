/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Navigation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NavigationUpdateFormInputValues = {
    name?: string;
    href?: string;
    current?: boolean;
};
export declare type NavigationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    href?: ValidationFunction<string>;
    current?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationUpdateFormOverridesProps = {
    NavigationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    href?: PrimitiveOverrideProps<TextFieldProps>;
    current?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type NavigationUpdateFormProps = React.PropsWithChildren<{
    overrides?: NavigationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    navigation?: Navigation;
    onSubmit?: (fields: NavigationUpdateFormInputValues) => NavigationUpdateFormInputValues;
    onSuccess?: (fields: NavigationUpdateFormInputValues) => void;
    onError?: (fields: NavigationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NavigationUpdateFormInputValues) => NavigationUpdateFormInputValues;
    onValidate?: NavigationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NavigationUpdateForm(props: NavigationUpdateFormProps): React.ReactElement;
