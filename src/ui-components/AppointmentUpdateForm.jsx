/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Appointment } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AppointmentUpdateForm(props) {
  const {
    id: idProp,
    appointment: appointmentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    serviceId: "",
    serviceName: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    appointmentDate: "",
    appointmentTime: "",
    duration: "",
    price: "",
    status: "",
    notes: "",
    googleCalendarEventId: "",
  };
  const [serviceId, setServiceId] = React.useState(initialValues.serviceId);
  const [serviceName, setServiceName] = React.useState(
    initialValues.serviceName
  );
  const [customerName, setCustomerName] = React.useState(
    initialValues.customerName
  );
  const [customerEmail, setCustomerEmail] = React.useState(
    initialValues.customerEmail
  );
  const [customerPhone, setCustomerPhone] = React.useState(
    initialValues.customerPhone
  );
  const [appointmentDate, setAppointmentDate] = React.useState(
    initialValues.appointmentDate
  );
  const [appointmentTime, setAppointmentTime] = React.useState(
    initialValues.appointmentTime
  );
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [price, setPrice] = React.useState(initialValues.price);
  const [status, setStatus] = React.useState(initialValues.status);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [googleCalendarEventId, setGoogleCalendarEventId] = React.useState(
    initialValues.googleCalendarEventId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = appointmentRecord
      ? { ...initialValues, ...appointmentRecord }
      : initialValues;
    setServiceId(cleanValues.serviceId);
    setServiceName(cleanValues.serviceName);
    setCustomerName(cleanValues.customerName);
    setCustomerEmail(cleanValues.customerEmail);
    setCustomerPhone(cleanValues.customerPhone);
    setAppointmentDate(cleanValues.appointmentDate);
    setAppointmentTime(cleanValues.appointmentTime);
    setDuration(cleanValues.duration);
    setPrice(cleanValues.price);
    setStatus(cleanValues.status);
    setNotes(cleanValues.notes);
    setGoogleCalendarEventId(cleanValues.googleCalendarEventId);
    setErrors({});
  };
  const [appointmentRecord, setAppointmentRecord] =
    React.useState(appointmentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Appointment, idProp)
        : appointmentModelProp;
      setAppointmentRecord(record);
    };
    queryData();
  }, [idProp, appointmentModelProp]);
  React.useEffect(resetStateValues, [appointmentRecord]);
  const validations = {
    serviceId: [{ type: "Required" }],
    serviceName: [{ type: "Required" }],
    customerName: [{ type: "Required" }],
    customerEmail: [{ type: "Required" }, { type: "Email" }],
    customerPhone: [{ type: "Required" }],
    appointmentDate: [{ type: "Required" }],
    appointmentTime: [{ type: "Required" }],
    duration: [{ type: "Required" }],
    price: [{ type: "Required" }],
    status: [{ type: "Required" }],
    notes: [],
    googleCalendarEventId: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          serviceId,
          serviceName,
          customerName,
          customerEmail,
          customerPhone,
          appointmentDate,
          appointmentTime,
          duration,
          price,
          status,
          notes,
          googleCalendarEventId,
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
            Appointment.copyOf(appointmentRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AppointmentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Service id"
        isRequired={true}
        isReadOnly={false}
        value={serviceId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceId: value,
              serviceName,
              customerName,
              customerEmail,
              customerPhone,
              appointmentDate,
              appointmentTime,
              duration,
              price,
              status,
              notes,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.serviceId ?? value;
          }
          if (errors.serviceId?.hasError) {
            runValidationTasks("serviceId", value);
          }
          setServiceId(value);
        }}
        onBlur={() => runValidationTasks("serviceId", serviceId)}
        errorMessage={errors.serviceId?.errorMessage}
        hasError={errors.serviceId?.hasError}
        {...getOverrideProps(overrides, "serviceId")}
      ></TextField>
      <TextField
        label="Service name"
        isRequired={true}
        isReadOnly={false}
        value={serviceName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName: value,
              customerName,
              customerEmail,
              customerPhone,
              appointmentDate,
              appointmentTime,
              duration,
              price,
              status,
              notes,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.serviceName ?? value;
          }
          if (errors.serviceName?.hasError) {
            runValidationTasks("serviceName", value);
          }
          setServiceName(value);
        }}
        onBlur={() => runValidationTasks("serviceName", serviceName)}
        errorMessage={errors.serviceName?.errorMessage}
        hasError={errors.serviceName?.hasError}
        {...getOverrideProps(overrides, "serviceName")}
      ></TextField>
      <TextField
        label="Customer name"
        isRequired={true}
        isReadOnly={false}
        value={customerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName,
              customerName: value,
              customerEmail,
              customerPhone,
              appointmentDate,
              appointmentTime,
              duration,
              price,
              status,
              notes,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.customerName ?? value;
          }
          if (errors.customerName?.hasError) {
            runValidationTasks("customerName", value);
          }
          setCustomerName(value);
        }}
        onBlur={() => runValidationTasks("customerName", customerName)}
        errorMessage={errors.customerName?.errorMessage}
        hasError={errors.customerName?.hasError}
        {...getOverrideProps(overrides, "customerName")}
      ></TextField>
      <TextField
        label="Customer email"
        isRequired={true}
        isReadOnly={false}
        value={customerEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName,
              customerName,
              customerEmail: value,
              customerPhone,
              appointmentDate,
              appointmentTime,
              duration,
              price,
              status,
              notes,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.customerEmail ?? value;
          }
          if (errors.customerEmail?.hasError) {
            runValidationTasks("customerEmail", value);
          }
          setCustomerEmail(value);
        }}
        onBlur={() => runValidationTasks("customerEmail", customerEmail)}
        errorMessage={errors.customerEmail?.errorMessage}
        hasError={errors.customerEmail?.hasError}
        {...getOverrideProps(overrides, "customerEmail")}
      ></TextField>
      <TextField
        label="Customer phone"
        isRequired={true}
        isReadOnly={false}
        value={customerPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName,
              customerName,
              customerEmail,
              customerPhone: value,
              appointmentDate,
              appointmentTime,
              duration,
              price,
              status,
              notes,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.customerPhone ?? value;
          }
          if (errors.customerPhone?.hasError) {
            runValidationTasks("customerPhone", value);
          }
          setCustomerPhone(value);
        }}
        onBlur={() => runValidationTasks("customerPhone", customerPhone)}
        errorMessage={errors.customerPhone?.errorMessage}
        hasError={errors.customerPhone?.hasError}
        {...getOverrideProps(overrides, "customerPhone")}
      ></TextField>
      <TextField
        label="Appointment date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={appointmentDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName,
              customerName,
              customerEmail,
              customerPhone,
              appointmentDate: value,
              appointmentTime,
              duration,
              price,
              status,
              notes,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.appointmentDate ?? value;
          }
          if (errors.appointmentDate?.hasError) {
            runValidationTasks("appointmentDate", value);
          }
          setAppointmentDate(value);
        }}
        onBlur={() => runValidationTasks("appointmentDate", appointmentDate)}
        errorMessage={errors.appointmentDate?.errorMessage}
        hasError={errors.appointmentDate?.hasError}
        {...getOverrideProps(overrides, "appointmentDate")}
      ></TextField>
      <TextField
        label="Appointment time"
        isRequired={true}
        isReadOnly={false}
        value={appointmentTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName,
              customerName,
              customerEmail,
              customerPhone,
              appointmentDate,
              appointmentTime: value,
              duration,
              price,
              status,
              notes,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.appointmentTime ?? value;
          }
          if (errors.appointmentTime?.hasError) {
            runValidationTasks("appointmentTime", value);
          }
          setAppointmentTime(value);
        }}
        onBlur={() => runValidationTasks("appointmentTime", appointmentTime)}
        errorMessage={errors.appointmentTime?.errorMessage}
        hasError={errors.appointmentTime?.hasError}
        {...getOverrideProps(overrides, "appointmentTime")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={duration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName,
              customerName,
              customerEmail,
              customerPhone,
              appointmentDate,
              appointmentTime,
              duration: value,
              price,
              status,
              notes,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName,
              customerName,
              customerEmail,
              customerPhone,
              appointmentDate,
              appointmentTime,
              duration,
              price: value,
              status,
              notes,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={true}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName,
              customerName,
              customerEmail,
              customerPhone,
              appointmentDate,
              appointmentTime,
              duration,
              price,
              status: value,
              notes,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName,
              customerName,
              customerEmail,
              customerPhone,
              appointmentDate,
              appointmentTime,
              duration,
              price,
              status,
              notes: value,
              googleCalendarEventId,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <TextField
        label="Google calendar event id"
        isRequired={false}
        isReadOnly={false}
        value={googleCalendarEventId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceId,
              serviceName,
              customerName,
              customerEmail,
              customerPhone,
              appointmentDate,
              appointmentTime,
              duration,
              price,
              status,
              notes,
              googleCalendarEventId: value,
            };
            const result = onChange(modelFields);
            value = result?.googleCalendarEventId ?? value;
          }
          if (errors.googleCalendarEventId?.hasError) {
            runValidationTasks("googleCalendarEventId", value);
          }
          setGoogleCalendarEventId(value);
        }}
        onBlur={() =>
          runValidationTasks("googleCalendarEventId", googleCalendarEventId)
        }
        errorMessage={errors.googleCalendarEventId?.errorMessage}
        hasError={errors.googleCalendarEventId?.hasError}
        {...getOverrideProps(overrides, "googleCalendarEventId")}
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
          isDisabled={!(idProp || appointmentModelProp)}
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
              !(idProp || appointmentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
