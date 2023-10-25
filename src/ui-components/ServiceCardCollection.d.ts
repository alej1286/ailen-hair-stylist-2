/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ServiceCardProps } from "./ServiceCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ServiceCardCollectionOverridesProps = {
  ServiceCardCollection?: PrimitiveOverrideProps<CollectionProps>;
  ServiceCard?: ServiceCardProps;
} & EscapeHatchProps;
export declare type ServiceCardCollectionProps = React.PropsWithChildren<
  Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
      item: any;
      index: number;
    }) => ServiceCardProps;
  } & {
    overrides?: ServiceCardCollectionOverridesProps | undefined | null;
  }
>;
export default function ServiceCardCollection(
  props: ServiceCardCollectionProps,
): React.ReactElement;
