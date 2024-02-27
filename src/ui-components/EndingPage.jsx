/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function EndingPage(props) {
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
      {...getOverrideProps(overrides, "EndingPage")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="1922px"
        height="1082px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="-1px"
        left="-1px"
        border="1px SOLID rgba(0,0,0,1)"
        padding="16px 60px 16px 60px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Landing Page")}
      >
        <Flex
          gap="0"
          direction="row"
          width="1920px"
          height="1080px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "HeroLayout1")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="120px 120px 120px 120px"
            backgroundColor="rgba(13,26,38,1)"
            {...getOverrideProps(overrides, "Left")}
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
              {...getOverrideProps(overrides, "HeroMessage")}
            >
              <Flex
                gap="16px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Message")}
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
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Thank you for submitting the survey"
                  {...getOverrideProps(overrides, "Eyebrow")}
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
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="We greatly appreciate the feedback given and we will work hard to improve our customer service! "
                  {...getOverrideProps(overrides, "Heading")}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(188,236,245,1)"
                  lineHeight="24px"
                  textAlign="center"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.01px"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="If you could please leave feedback on any other calls you have been apart of it would be immensely helpful in our goal of providing the best customer service possible"
                  {...getOverrideProps(overrides, "Body")}
                ></Text>
              </Flex>
              <Button
                width="unset"
                height="unset"
                shrink="0"
                backgroundColor="rgba(67,168,84,1)"
                size="large"
                isDisabled={false}
                variation="primary"
                children="<- Go back to Call History"
                onClick={() => {
                  buttonOnClick();
                }}
                {...getOverrideProps(overrides, "Button")}
              ></Button>
            </Flex>
          </Flex>
          <Flex
            gap="10px"
            direction="column"
            width="720px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Right")}
          >
            <Image
              width="unset"
              height="unset"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="unset"
              {...getOverrideProps(overrides, "image")}
            ></Image>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="750px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="1008px"
        left="210px"
        padding="12px 16px 12px 16px"
        backgroundColor="rgba(214,245,219,1)"
        {...getOverrideProps(overrides, "Alert")}
      >
        <Icon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="checkmark_circle"
          fontSize="24px"
          {...getOverrideProps(overrides, "\uD83D\uDD12Icon39011144")}
        ></Icon>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "frame")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "content")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(54,94,61,1)"
              lineHeight="24px"
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
              children="Success"
              {...getOverrideProps(overrides, "heading")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(54,94,61,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Feedback has been received "
              {...getOverrideProps(overrides, "body")}
            ></Text>
          </Flex>
        </Flex>
        <Icon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="close"
          fontSize="24px"
          {...getOverrideProps(overrides, "\uD83D\uDD12Icon39011149")}
        ></Icon>
      </Flex>
    </View>
  );
}
