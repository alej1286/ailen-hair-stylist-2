/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Services } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServicesUpdateFormInputValues = {
    type?: string;
    price?: string;
};
export declare type ServicesUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServicesUpdateFormOverridesProps = {
    ServicesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServicesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServicesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    services?: Services;
    onSubmit?: (fields: ServicesUpdateFormInputValues) => ServicesUpdateFormInputValues;
    onSuccess?: (fields: ServicesUpdateFormInputValues) => void;
    onError?: (fields: ServicesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServicesUpdateFormInputValues) => ServicesUpdateFormInputValues;
    onValidate?: ServicesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServicesUpdateForm(props: ServicesUpdateFormProps): React.ReactElement;
