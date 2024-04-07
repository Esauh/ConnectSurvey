/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Badge, Button, Flex, Text } from "@aws-amplify/ui-react";
export default function IncidentCard(props) {
  const { incident, customer, overrides, ...rest } = props;
  const buttonFourZeroEightZeroFourSevenSixOnClick = useNavigateAction({
    type: "url",
    url: "/feedback",
  });
  const buttonFourZeroEightZeroFourSevenSevenOnClick = useNavigateAction({
    type: "url",
    url: "/feedback",
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="620px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(8,39,69,1)"
      {...getOverrideProps(overrides, "IncidentCard")}
      {...rest}
    >
      <Badge
        width="unset"
        height="unset"
        gap="0"
        shrink="0"
        size="small"
        variation="default"
        children={incident?.resolved == true ? "Resolved" : "Unresolved"}
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={incident?.summary}
        {...getOverrideProps(overrides, "Incident Summary")}
      ></Text>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 417")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Product Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(188,236,245,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Agent: "}${incident?.agentName}`}
            {...getOverrideProps(overrides, "Agent Name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Date: "}${incident?.startDate}`}
            {...getOverrideProps(overrides, "Incident Date")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Time: "}${incident?.callStartTime}`}
            {...getOverrideProps(overrides, "Incident Time")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Tags")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          backgroundColor="rgba(191,64,191,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Leave Voice Feedback"
          onClick={() => {
            buttonFourZeroEightZeroFourSevenSixOnClick();
          }}
          {...getOverrideProps(overrides, "Button4080476")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          backgroundColor="rgba(67,168,84,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Leave Chat Feedback "
          onClick={() => {
            buttonFourZeroEightZeroFourSevenSevenOnClick();
          }}
          {...getOverrideProps(overrides, "Button4080477")}
        ></Button>
      </Flex>
    </Flex>
  );
}
