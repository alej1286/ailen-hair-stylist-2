/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PricesFormInputValues = {
    type?: string;
    price?: string;
};
export declare type PricesFormValidationValues = {
    type?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PricesFormOverridesProps = {
    PricesFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PricesFormProps = React.PropsWithChildren<{
    overrides?: PricesFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PricesFormInputValues) => PricesFormInputValues;
    onSuccess?: (fields: PricesFormInputValues) => void;
    onError?: (fields: PricesFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PricesFormInputValues) => PricesFormInputValues;
    onValidate?: PricesFormValidationValues;
} & React.CSSProperties>;
export default function PricesForm(props: PricesFormProps): React.ReactElement;
