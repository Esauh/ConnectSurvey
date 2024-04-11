/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function PhoneNumberAuthentication(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/callhistory" });
  return (
    <View
      width="1920px"
      height="1080px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PhoneNumberAuthentication")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="1920px"
        height="1080px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="160px 160px 160px 160px"
        backgroundColor="rgba(13,26,38,1)"
        {...getOverrideProps(overrides, "CTASection")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Type Lock Up")}
        >
          <Flex
            gap="12px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 436")}
          >
            <Text
              fontFamily="Inter"
              fontSize="32px"
              fontWeight="700"
              color="rgba(188,236,245,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="1120px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Call History"
              {...getOverrideProps(overrides, "Newsletter")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(233,249,252,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="1120px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="View your Recent Call History"
              {...getOverrideProps(
                overrides,
                "Stay in touch and never miss an update"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(233,249,252,1)"
              lineHeight="20px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="1120px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Enter in the phone number used to contact our call center and click continue to view your recent call history"
              {...getOverrideProps(
                overrides,
                "Keep up to date on the latest and greatest in the frontend and fullstack community"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Form")}
          >
            <TextField
              width="300px"
              height="unset"
              placeholder="Phone Number"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              {...getOverrideProps(overrides, "TextField")}
            ></TextField>
            <Button
              width="unset"
              height="unset"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Continue"
              onClick={() => {
                buttonOnClick();
              }}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
