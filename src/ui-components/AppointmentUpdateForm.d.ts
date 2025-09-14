/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Appointment } from "../models";
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
export declare type AppointmentUpdateFormInputValues = {
    serviceId?: string;
    serviceName?: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    appointmentDate?: string;
    appointmentTime?: string;
    duration?: number;
    price?: number;
    status?: string;
    notes?: string;
    googleCalendarEventId?: string;
};
export declare type AppointmentUpdateFormValidationValues = {
    serviceId?: ValidationFunction<string>;
    serviceName?: ValidationFunction<string>;
    customerName?: ValidationFunction<string>;
    customerEmail?: ValidationFunction<string>;
    customerPhone?: ValidationFunction<string>;
    appointmentDate?: ValidationFunction<string>;
    appointmentTime?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    googleCalendarEventId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppointmentUpdateFormOverridesProps = {
    AppointmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    serviceId?: PrimitiveOverrideProps<TextFieldProps>;
    serviceName?: PrimitiveOverrideProps<TextFieldProps>;
    customerName?: PrimitiveOverrideProps<TextFieldProps>;
    customerEmail?: PrimitiveOverrideProps<TextFieldProps>;
    customerPhone?: PrimitiveOverrideProps<TextFieldProps>;
    appointmentDate?: PrimitiveOverrideProps<TextFieldProps>;
    appointmentTime?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    googleCalendarEventId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppointmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppointmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    appointment?: Appointment;
    onSubmit?: (fields: AppointmentUpdateFormInputValues) => AppointmentUpdateFormInputValues;
    onSuccess?: (fields: AppointmentUpdateFormInputValues) => void;
    onError?: (fields: AppointmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppointmentUpdateFormInputValues) => AppointmentUpdateFormInputValues;
    onValidate?: AppointmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppointmentUpdateForm(props: AppointmentUpdateFormProps): React.ReactElement;
