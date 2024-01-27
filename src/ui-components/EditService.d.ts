/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Service } from "../models";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type EditServiceOverridesProps = {
    EditService?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Service4112308"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Edit Service4112311"?: PrimitiveOverrideProps<TextProps>;
    Divider4112312?: PrimitiveOverrideProps<DividerProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    UploadNewImage?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TypeTextField?: PrimitiveOverrideProps<TextFieldProps>;
    PriceTextField?: PrimitiveOverrideProps<TextFieldProps>;
    Divider4112319?: PrimitiveOverrideProps<DividerProps>;
    SaveButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EditServiceProps = React.PropsWithChildren<Partial<FlexProps> & {
    on?: String;
    service?: Service;
} & {
    overrides?: EditServiceOverridesProps | undefined | null;
}>;
export default function EditService(props: EditServiceProps): React.ReactElement;
