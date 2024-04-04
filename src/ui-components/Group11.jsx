/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function Group11(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1761px"
      height="863px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Group11")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1761px"
        height="863px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 10")}
      >
        <View
          width="1761px"
          height="863px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(0,0,0,1)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(8,39,69,1)"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></View>
        <Button
          width="819px"
          height="142px"
          position="absolute"
          top="77.75%"
          bottom="5.79%"
          left="21.64%"
          right="31.86%"
          backgroundColor="rgba(67,168,84,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Submit Feedback!"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Text
          fontFamily="Inter"
          fontSize="96px"
          fontWeight="800"
          color="rgba(188,236,245,1)"
          fontStyle="italic"
          lineHeight="144px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          textDecoration="underline"
          width="1282px"
          height="81px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="16.8%"
          bottom="73.81%"
          left="9.14%"
          right="18.06%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Voice Feedback Survey"
          {...getOverrideProps(overrides, "Voice Feedback Survey")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="784px"
          height="156px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="39.63%"
          bottom="42.29%"
          left="22.66%"
          right="32.82%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Thank you for choosing Amazon Connect Customer Service. We value your feedback to enhance our services. Please leave a brief message sharing your experience with us. Your input is invaluable in helping us serve you better. Thank you for taking the time to connect with us."
          {...getOverrideProps(
            overrides,
            "Thank you for choosing Amazon Connect Customer Service. We value your feedback to enhance our services. Please leave a brief message sharing your experience with us. Your input is invaluable in helping us serve you better. Thank you for taking the time to connect with us."
          )}
        ></Text>
      </View>
    </View>
  );
}
