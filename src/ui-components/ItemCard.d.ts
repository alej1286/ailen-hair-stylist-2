/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Services } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemCardOverridesProps = {
    ItemCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    ipsumlaborisaliq?: PrimitiveOverrideProps<TextProps>;
    $inmolliteiusmodmagnaame?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ItemCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    services?: Services;
} & {
    overrides?: ItemCardOverridesProps | undefined | null;
}>;
export default function ItemCard(props: ItemCardProps): React.ReactElement;
