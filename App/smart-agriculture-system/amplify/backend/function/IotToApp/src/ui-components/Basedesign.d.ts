/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavBarHeaderProps } from "./NavBarHeader";
import { ButtonProps, FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasedesignOverridesProps = {
    Basedesign?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader?: NavBarHeaderProps;
    "Humidity graph"?: PrimitiveOverrideProps<ViewProps>;
    Button38481657?: PrimitiveOverrideProps<ButtonProps>;
    Button38481661?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type BasedesignProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BasedesignOverridesProps | undefined | null;
}>;
export default function Basedesign(props: BasedesignProps): React.ReactElement;
