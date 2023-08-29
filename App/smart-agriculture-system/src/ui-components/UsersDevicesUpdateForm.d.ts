/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UsersDevices } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersDevicesUpdateFormInputValues = {
    devices?: string[];
    User?: string;
};
export declare type UsersDevicesUpdateFormValidationValues = {
    devices?: ValidationFunction<string>;
    User?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersDevicesUpdateFormOverridesProps = {
    UsersDevicesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    devices?: PrimitiveOverrideProps<TextFieldProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersDevicesUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsersDevicesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usersDevices?: UsersDevices;
    onSubmit?: (fields: UsersDevicesUpdateFormInputValues) => UsersDevicesUpdateFormInputValues;
    onSuccess?: (fields: UsersDevicesUpdateFormInputValues) => void;
    onError?: (fields: UsersDevicesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersDevicesUpdateFormInputValues) => UsersDevicesUpdateFormInputValues;
    onValidate?: UsersDevicesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsersDevicesUpdateForm(props: UsersDevicesUpdateFormProps): React.ReactElement;
