/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Reading } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReadingUpdateFormInputValues = {
    humidity?: number;
    timestamp?: number;
    device?: string;
};
export declare type ReadingUpdateFormValidationValues = {
    humidity?: ValidationFunction<number>;
    timestamp?: ValidationFunction<number>;
    device?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReadingUpdateFormOverridesProps = {
    ReadingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    humidity?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    device?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReadingUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReadingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reading?: Reading;
    onSubmit?: (fields: ReadingUpdateFormInputValues) => ReadingUpdateFormInputValues;
    onSuccess?: (fields: ReadingUpdateFormInputValues) => void;
    onError?: (fields: ReadingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReadingUpdateFormInputValues) => ReadingUpdateFormInputValues;
    onValidate?: ReadingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReadingUpdateForm(props: ReadingUpdateFormProps): React.ReactElement;
