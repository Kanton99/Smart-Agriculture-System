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
export declare type ReadingsCreateFormInputValues = {
    humidity?: number;
    timestamp?: number;
    device?: string;
    User?: string;
};
export declare type ReadingsCreateFormValidationValues = {
    humidity?: ValidationFunction<number>;
    timestamp?: ValidationFunction<number>;
    device?: ValidationFunction<string>;
    User?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReadingsCreateFormOverridesProps = {
    ReadingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    humidity?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    device?: PrimitiveOverrideProps<TextFieldProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReadingsCreateFormProps = React.PropsWithChildren<{
    overrides?: ReadingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReadingsCreateFormInputValues) => ReadingsCreateFormInputValues;
    onSuccess?: (fields: ReadingsCreateFormInputValues) => void;
    onError?: (fields: ReadingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReadingsCreateFormInputValues) => ReadingsCreateFormInputValues;
    onValidate?: ReadingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReadingsCreateForm(props: ReadingsCreateFormProps): React.ReactElement;
