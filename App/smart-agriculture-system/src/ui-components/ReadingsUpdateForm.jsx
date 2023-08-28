/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Readings } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ReadingsUpdateForm(props) {
  const {
    id: idProp,
    readings: readingsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    humidity: "",
    timestamp: "",
    device: "",
  };
  const [humidity, setHumidity] = React.useState(initialValues.humidity);
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [device, setDevice] = React.useState(initialValues.device);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = readingsRecord
      ? { ...initialValues, ...readingsRecord }
      : initialValues;
    setHumidity(cleanValues.humidity);
    setTimestamp(cleanValues.timestamp);
    setDevice(cleanValues.device);
    setErrors({});
  };
  const [readingsRecord, setReadingsRecord] = React.useState(readingsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Readings, idProp)
        : readingsModelProp;
      setReadingsRecord(record);
    };
    queryData();
  }, [idProp, readingsModelProp]);
  React.useEffect(resetStateValues, [readingsRecord]);
  const validations = {
    humidity: [{ type: "Required" }],
    timestamp: [{ type: "Required" }],
    device: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          humidity,
          timestamp,
          device,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Readings.copyOf(readingsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReadingsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Humidity"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={humidity}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              humidity: value,
              timestamp,
              device,
            };
            const result = onChange(modelFields);
            value = result?.humidity ?? value;
          }
          if (errors.humidity?.hasError) {
            runValidationTasks("humidity", value);
          }
          setHumidity(value);
        }}
        onBlur={() => runValidationTasks("humidity", humidity)}
        errorMessage={errors.humidity?.errorMessage}
        hasError={errors.humidity?.hasError}
        {...getOverrideProps(overrides, "humidity")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={timestamp && convertToLocal(convertTimeStampToDate(timestamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              humidity,
              timestamp: value,
              device,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <TextField
        label="Device"
        isRequired={true}
        isReadOnly={false}
        value={device}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              humidity,
              timestamp,
              device: value,
            };
            const result = onChange(modelFields);
            value = result?.device ?? value;
          }
          if (errors.device?.hasError) {
            runValidationTasks("device", value);
          }
          setDevice(value);
        }}
        onBlur={() => runValidationTasks("device", device)}
        errorMessage={errors.device?.errorMessage}
        hasError={errors.device?.hasError}
        {...getOverrideProps(overrides, "device")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || readingsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || readingsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
