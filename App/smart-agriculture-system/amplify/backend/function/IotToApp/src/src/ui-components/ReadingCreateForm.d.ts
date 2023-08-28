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
export declare type ReadingCreateFormInputValues = {
    humidity?: number;
    timestamp?: number;
    device?: string;
};
export declare type ReadingCreateFormValidationValues = {
    humidity?: ValidationFunction<number>;
    timestamp?: ValidationFunction<number>;
    device?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReadingCreateFormOverridesProps = {
    ReadingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    humidity?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    device?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReadingCreateFormProps = React.PropsWithChildren<{
    overrides?: ReadingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReadingCreateFormInputValues) => ReadingCreateFormInputValues;
    onSuccess?: (fields: ReadingCreateFormInputValues) => void;
    onError?: (fields: ReadingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReadingCreateFormInputValues) => ReadingCreateFormInputValues;
    onValidate?: ReadingCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReadingCreateForm(props: ReadingCreateFormProps): React.ReactElement;
