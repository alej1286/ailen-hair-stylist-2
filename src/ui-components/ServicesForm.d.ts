/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServicesFormInputValues = {};
export declare type ServicesFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServicesFormOverridesProps = {
    ServicesFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ServicesFormProps = React.PropsWithChildren<{
    overrides?: ServicesFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: ServicesFormInputValues) => void;
    onChange?: (fields: ServicesFormInputValues) => ServicesFormInputValues;
    onValidate?: ServicesFormValidationValues;
} & React.CSSProperties>;
export default function ServicesForm(props: ServicesFormProps): React.ReactElement;
