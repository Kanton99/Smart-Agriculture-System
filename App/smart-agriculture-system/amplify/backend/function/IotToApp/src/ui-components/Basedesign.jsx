/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBarHeader from "./NavBarHeader";
import { Button, Flex, View } from "@aws-amplify/ui-react";
export default function Basedesign(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1596px"
      height="601px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="25px 50px 25px 50px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Basedesign")}
      {...rest}
    >
      <NavBarHeader
        display="flex"
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBarHeader")}
      ></NavBarHeader>
      <View
        width="unset"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Humidity graph")}
      ></View>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Water plant"
        {...getOverrideProps(overrides, "Button38481657")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Read humidity"
        {...getOverrideProps(overrides, "Button38481661")}
      ></Button>
    </Flex>
  );
}
