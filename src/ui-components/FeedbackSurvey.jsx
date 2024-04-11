/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import CTASection from "./CTASection";
import {
  Button,
  Rating,
  SwitchField,
  Text,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
export default function FeedbackSurvey(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1663px"
      height="1930px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FeedbackSurvey")}
      {...rest}
    >
      <CTASection
        display="flex"
        gap="10px"
        direction="column"
        width="1386.18px"
        height="1930px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="16.48%"
        right="0.17%"
        padding="160px 160px 160px 160px"
        backgroundColor="rgba(13,26,38,1)"
        {...getOverrideProps(overrides, "CTASection")}
      ></CTASection>
      <View
        padding="0px 0px 0px 0px"
        width="513px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="38.45%"
        bottom="58.08%"
        left="43.96%"
        right="25.2%"
        {...getOverrideProps(overrides, "Group 7")}
      >
        <SwitchField
          width="109.01px"
          height="unset"
          label="Yes"
          position="absolute"
          top="calc(50% - 23px - 10.5px)"
          left="78.75%"
          right="0%"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField4095287")}
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
          width="403.99px"
          height="67px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="21.25%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Was it easy to contact and get a hold of a customer service representative?"
          {...getOverrideProps(
            overrides,
            "Was it easy to contact and get a hold of a customer service representative?"
          )}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1030px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="66.42%"
        bottom="31.45%"
        left="30.85%"
        right="7.22%"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="1030px"
          height="41px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Group 14037929")}
        >
          <Rating
            width="268.75px"
            height="unset"
            position="absolute"
            top="0%"
            bottom="12.2%"
            left="73.91%"
            right="0%"
            size="large"
            {...getOverrideProps(overrides, "Rating4037930")}
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
            width="738.2px"
            height="36px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12.2%"
            bottom="0%"
            left="0%"
            right="28.33%"
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
        width="995.1px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="60.57%"
        bottom="37.31%"
        left="30.84%"
        right="9.32%"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="995.1px"
          height="41px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Group 14037933")}
        >
          <Rating
            width="232.83px"
            height="unset"
            position="absolute"
            top="0%"
            bottom="12.2%"
            left="76.6%"
            right="0%"
            size="large"
            {...getOverrideProps(overrides, "Rating4037934")}
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
            width="795.29px"
            height="36px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12.2%"
            bottom="0%"
            left="0%"
            right="20.08%"
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
        width="513px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="15.39%"
        bottom="81.14%"
        left="43.96%"
        right="25.2%"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <SwitchField
          width="104.83px"
          height="unset"
          label="Yes"
          position="absolute"
          top="0%"
          bottom="31.34%"
          left="79.56%"
          right="0%"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField4037937")}
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
          width="405.83px"
          height="67px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="20.89%"
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
        width="513px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="31.04%"
        bottom="65.49%"
        left="43.96%"
        right="25.2%"
        {...getOverrideProps(overrides, "Group 6")}
      >
        <SwitchField
          width="104.83px"
          height="unset"
          label="Yes"
          position="absolute"
          top="0%"
          bottom="31.34%"
          left="79.56%"
          right="0%"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField4037940")}
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
          width="405.83px"
          height="67px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="20.89%"
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
        width="512.78px"
        height="86px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="23.37%"
        bottom="72.18%"
        left="43.97%"
        right="25.2%"
        {...getOverrideProps(overrides, "Group 5")}
      >
        <SwitchField
          width="108.97px"
          height="59.04px"
          label="Yes"
          position="absolute"
          top="0%"
          bottom="31.34%"
          left="78.75%"
          right="0%"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField4037943")}
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
          width="403.82px"
          height="86px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="21.25%"
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
        padding="0px 0px 0px 0px"
        width="511px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="52.59%"
        bottom="43.94%"
        left="44.08%"
        right="25.2%"
        {...getOverrideProps(overrides, "Group 8")}
      >
        <SwitchField
          width="104.43px"
          height="unset"
          label="Yes"
          position="absolute"
          top="0%"
          bottom="31.34%"
          left="79.56%"
          right="0%"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField4037950")}
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
          width="404.25px"
          height="67px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="20.89%"
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
        width="511px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="45.85%"
        bottom="50.67%"
        left="44.08%"
        right="25.2%"
        {...getOverrideProps(overrides, "Group 9")}
      >
        <SwitchField
          width="104.43px"
          height="unset"
          label="Yes"
          position="absolute"
          top="0%"
          bottom="31.34%"
          left="79.56%"
          right="0%"
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "SwitchField4037953")}
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
          width="404.25px"
          height="67px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="20.89%"
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
        width="931.78px"
        height="115px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="6.94%"
        bottom="87.1%"
        left="30.84%"
        right="13.13%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Feedback Survey"
        {...getOverrideProps(overrides, "Feedback Survey")}
      ></Text>
      <TextAreaField
        width="838.81px"
        height="184px"
        label="How can we improve our service?"
        position="absolute"
        top="72.12%"
        bottom="18.34%"
        left="32.91%"
        right="16.65%"
        placeholder="Placeholder"
        size="large"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
      <Button
        width="855.53px"
        height="142px"
        position="absolute"
        top="82.8%"
        bottom="9.84%"
        left="32.66%"
        right="15.89%"
        backgroundColor="rgba(67,168,84,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Submit Feedback!"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
