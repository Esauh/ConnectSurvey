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
  Rating,
  SwitchField,
  Text,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
export default function UpdatedFeedback(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "ending" });
  return (
    <View
      width="1030px"
      height="1106px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "UpdatedFeedback")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="513px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10.4%"
        bottom="83.54%"
        left="22.52%"
        right="27.67%"
        {...getOverrideProps(overrides, "Group 10")}
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
          {...getOverrideProps(overrides, "SwitchField4095297")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
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
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="800"
        color="rgba(64,170,191,1)"
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
        top="0%"
        bottom="89.6%"
        left="0%"
        right="9.54%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Feedback Survey"
        {...getOverrideProps(overrides, "Feedback Survey")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="512.78px"
        height="86px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="18.08%"
        bottom="74.14%"
        left="22.52%"
        right="27.69%"
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
          {...getOverrideProps(overrides, "SwitchField4095305")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
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
        width="513px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="27.49%"
        bottom="66.46%"
        left="22.33%"
        right="27.86%"
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
          {...getOverrideProps(overrides, "SwitchField4095321")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
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
        width="513px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="35.17%"
        bottom="58.77%"
        left="22.52%"
        right="27.67%"
        {...getOverrideProps(overrides, "Group 7")}
      >
        <SwitchField
          width="109.01px"
          height="unset"
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
          {...getOverrideProps(overrides, "SwitchField4095337")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
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
        width="511px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="42.86%"
        bottom="51.08%"
        left="22.52%"
        right="27.86%"
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
          {...getOverrideProps(overrides, "SwitchField4095345")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
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
      <View
        padding="0px 0px 0px 0px"
        width="511px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="50.54%"
        bottom="43.4%"
        left="22.52%"
        right="27.86%"
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
          {...getOverrideProps(overrides, "SwitchField4095353")}
        ></SwitchField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
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
        width="995.1px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="58.23%"
        bottom="38.07%"
        left="0%"
        right="3.39%"
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
          {...getOverrideProps(overrides, "Group 14095375")}
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
            {...getOverrideProps(overrides, "Rating4095376")}
          ></Rating>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
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
        width="1030px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="63.56%"
        bottom="32.73%"
        left="0%"
        right="0%"
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
          {...getOverrideProps(overrides, "Group 14095389")}
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
            {...getOverrideProps(overrides, "Rating4095390")}
          ></Rating>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
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
      <TextAreaField
        width="838.81px"
        height="184px"
        label="How can we improve our service?"
        position="absolute"
        top="68.9%"
        bottom="14.47%"
        left="9.03%"
        right="9.53%"
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
        top="87.16%"
        bottom="0%"
        left="7.38%"
        right="9.56%"
        backgroundColor="rgba(67,168,84,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Submit Feedback!"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
