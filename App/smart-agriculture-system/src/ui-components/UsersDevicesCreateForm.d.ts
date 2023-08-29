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
export declare type UsersDevicesCreateFormInputValues = {
    devices?: string[];
    User?: string;
};
export declare type UsersDevicesCreateFormValidationValues = {
    devices?: ValidationFunction<string>;
    User?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersDevicesCreateFormOverridesProps = {
    UsersDevicesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    devices?: PrimitiveOverrideProps<TextFieldProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersDevicesCreateFormProps = React.PropsWithChildren<{
    overrides?: UsersDevicesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsersDevicesCreateFormInputValues) => UsersDevicesCreateFormInputValues;
    onSuccess?: (fields: UsersDevicesCreateFormInputValues) => void;
    onError?: (fields: UsersDevicesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersDevicesCreateFormInputValues) => UsersDevicesCreateFormInputValues;
    onValidate?: UsersDevicesCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsersDevicesCreateForm(props: UsersDevicesCreateFormProps): React.ReactElement;
