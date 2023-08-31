/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Service } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceUpdateFormInputValues = {
    type?: string;
    price?: string;
    imagePath?: string;
};
export declare type ServiceUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    imagePath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceUpdateFormOverridesProps = {
    ServiceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    imagePath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServiceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    service?: Service;
    onSubmit?: (fields: ServiceUpdateFormInputValues) => ServiceUpdateFormInputValues;
    onSuccess?: (fields: ServiceUpdateFormInputValues) => void;
    onError?: (fields: ServiceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceUpdateFormInputValues) => ServiceUpdateFormInputValues;
    onValidate?: ServiceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceUpdateForm(props: ServiceUpdateFormProps): React.ReactElement;
