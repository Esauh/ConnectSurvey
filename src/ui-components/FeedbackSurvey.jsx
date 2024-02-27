/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import {
  Button,
  Flex,
  Rating,
  SwitchField,
  Text,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
export default function FeedbackSurvey(props) {
  const { overrides, ...rest } = props;
  const buttonThreeEightSixZeroTwoSixTwoTwoOnClick = useNavigateAction({
    type: "url",
    url: "/ending",
  });
  const buttonThreeEightSixZeroTwoSixTwoThreeOnClick = useNavigateAction({
    type: "url",
    url: "/ending",
  });
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
      {...getOverrideProps(overrides, "FeedbackSurvey")}
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
      ></Flex>
      <TextAreaField
        width="786px"
        height="166px"
        label="How can we improve our service?"
        position="absolute"
        top="631px"
        left="23px"
        placeholder="Placeholder"
        size="large"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        inputMode=""
        {...getOverrideProps(overrides, "TextAreaField38602592")}
      ></TextAreaField>
      <TextAreaField
        width="852px"
        height="166px"
        label="Do you have any other additional feedback?"
        position="absolute"
        top="631px"
        left="1026px"
        placeholder="Placeholder"
        size="large"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        inputMode=""
        {...getOverrideProps(overrides, "TextAreaField38602593")}
      ></TextAreaField>
      <View
        padding="0px 0px 0px 0px"
        width="870px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="540px"
        left="1026px"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="870px"
          height="41px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 138602595")}
        >
          <Rating
            width="227px"
            height="unset"
            position="absolute"
            top="0px"
            left="643px"
            size="large"
            {...getOverrideProps(overrides, "Rating38602596")}
          ></Rating>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="623.53px"
            height="36px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="5px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Overall what would you rate the quality of your customer service?"
            {...getOverrideProps(
              overrides,
              "Overall what would you rate the quality of your customer service?"
            )}
          ></Text>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="983px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="540px"
        left="23px"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="983px"
          height="41px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 138602599")}
        >
          <Rating
            width="230px"
            height="unset"
            position="absolute"
            top="0px"
            left="753px"
            size="large"
            {...getOverrideProps(overrides, "Rating38602600")}
          ></Rating>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="785.61px"
            height="36px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="5px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="How would you rate the service given by our customer service representative?"
            {...getOverrideProps(
              overrides,
              "How would you rate the service given by our customer service representative?"
            )}
          ></Text>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="480px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="191px"
        left="43px"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <SwitchField
          width="unset"
          height="unset"
          label="Yes"
          position="absolute"
          top="0px"
          left="378px"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField38602603")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="378px"
          height="67px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="DId the customer service representative resolve your issue? "
          {...getOverrideProps(
            overrides,
            "DId the customer service representative resolve your issue?"
          )}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="480px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="191px"
        left="1398px"
        {...getOverrideProps(overrides, "Group 6")}
      >
        <SwitchField
          width="unset"
          height="unset"
          label="Yes"
          position="absolute"
          top="0px"
          left="378px"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField38602606")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="378px"
          height="67px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Was your issue resolved in a timely manner?"
          {...getOverrideProps(
            overrides,
            "Was your issue resolved in a timely manner?"
          )}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="480px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="191px"
        left="720px"
        {...getOverrideProps(overrides, "Group 5")}
      >
        <SwitchField
          width="unset"
          height="unset"
          label="Yes"
          position="absolute"
          top="0px"
          left="378px"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField38602609")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="378px"
          height="67px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Was the customer service representative knowledgeable?"
          {...getOverrideProps(
            overrides,
            "Was the customer service representative knowledgeable?"
          )}
        ></Text>
      </View>
      <View
        width="480px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="423px"
        left="32px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="480px"
          height="67px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-37px"
          left="0px"
          {...getOverrideProps(overrides, "Group 7")}
        >
          <SwitchField
            width="unset"
            height="unset"
            label="Yes"
            position="absolute"
            top="0px"
            left="378px"
            size="large"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "SwitchField38602613")}
          ></SwitchField>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="378px"
            height="67px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Was it easy to contact and get a hold of a customer service representative?"
            {...getOverrideProps(
              overrides,
              "Was it easy to contact and get a hold of a customer service representative?"
            )}
          ></Text>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="480px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="386px"
        left="1387px"
        {...getOverrideProps(overrides, "Group 8")}
      >
        <SwitchField
          width="unset"
          height="unset"
          label="Yes"
          position="absolute"
          top="0px"
          left="378px"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField38602616")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="378px"
          height="67px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Were you overall satisfied with the customer service provided?"
          {...getOverrideProps(
            overrides,
            "Were you overall satisfied with the customer service provided?"
          )}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="480px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="386px"
        left="709px"
        {...getOverrideProps(overrides, "Group 9")}
      >
        <SwitchField
          width="unset"
          height="unset"
          label="Yes"
          position="absolute"
          top="0px"
          left="378px"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField38602619")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="378px"
          height="67px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Did the customer service representative make you feel valued? "
          {...getOverrideProps(
            overrides,
            "Did the customer service representative make you feel valued?"
          )}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="800"
        color="rgba(188,236,245,1)"
        fontStyle="italic"
        lineHeight="72px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        textDecoration="underline"
        width="909px"
        height="125px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="66px"
        left="506px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Feedback Survey"
        {...getOverrideProps(overrides, "Feedback Survey")}
      ></Text>
      <Button
        width="786px"
        height="98px"
        position="absolute"
        top="953px"
        left="23px"
        backgroundColor="rgba(67,168,84,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Submit Feedback!"
        onClick={() => {
          buttonThreeEightSixZeroTwoSixTwoTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Button38602622")}
      ></Button>
      <Button
        width="852px"
        height="98px"
        position="absolute"
        top="953px"
        left="1026px"
        backgroundColor="rgba(191,64,191,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="If you wish to leave an audio recording as feedback click here to do"
        onClick={() => {
          buttonThreeEightSixZeroTwoSixTwoThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button38602623")}
      ></Button>
    </View>
  );
}
