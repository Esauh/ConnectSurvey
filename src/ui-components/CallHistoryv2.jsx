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
  Icon,
  SearchField,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CallHistoryv2(props) {
  const { agent, incident, overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "CallHistoryv2")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1920px"
        height="1080px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="107px"
        left="74px"
        {...getOverrideProps(overrides, "Base Group")}
      >
        <CTASection
          display="flex"
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
        ></CTASection>
        <TextField
          width="291px"
          height="36px"
          placeholder="Agent ID"
          position="absolute"
          top="350px"
          left="20px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
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
          textDecoration="underline"
          width="590px"
          height="47px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="47px"
          left="670px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Recent Calls "
          {...getOverrideProps(overrides, "Recent Calls")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="1241px"
          height="148.91px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="919px"
          left="411px"
          {...getOverrideProps(overrides, "Group 6 Parent")}
        >
          <Icon
            width="1241px"
            height="148.91px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1241,
              height: 148.91290283203125,
            }}
            paths={[
              {
                d: "M0 0L1241 0L1241 148.913L0 148.913L0 0Z",
                fill: "rgba(8,39,69,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Rectangle 140371065")}
          ></Icon>
          <Button
            width="223px"
            height="50px"
            position="absolute"
            top="40px"
            left="976px"
            backgroundColor="rgba(67,168,84,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Chat Feedback"
            {...getOverrideProps(overrides, "Chat FB Button40371068")}
          ></Button>
          <Button
            width="232px"
            height="49px"
            position="absolute"
            top="40px"
            left="630px"
            backgroundColor="rgba(191,64,191,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Voice Feedback"
            {...getOverrideProps(overrides, "Voice FB Button4066342")}
          ></Button>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="195px"
            height="30px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="111px"
            left="259px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Time: "}${incident?.callStartTime}`}
            {...getOverrideProps(overrides, "Incident Time4066366")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="195px"
            height="30px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="111px"
            left="37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Date: "}${incident?.startDate}`}
            {...getOverrideProps(overrides, "Incident Date4066367")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="319px"
            height="30px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="70px"
            left="37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Agent: "}${agent?.name}`}
            {...getOverrideProps(overrides, "Agent Name4066368")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="26px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="450px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="17.89px"
            left="36.54px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={incident?.summary}
            {...getOverrideProps(overrides, "Incident Summary4066369")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="1241px"
          height="148.91px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="723px"
          left="411px"
          {...getOverrideProps(overrides, "Group 4 Parent")}
        >
          <Icon
            width="1241px"
            height="148.91px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1241,
              height: 148.91290283203125,
            }}
            paths={[
              {
                d: "M0 0L1241 0L1241 148.913L0 148.913L0 0Z",
                fill: "rgba(8,39,69,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Rectangle 140371048")}
          ></Icon>
          <Button
            width="223px"
            height="50px"
            position="absolute"
            top="40px"
            left="976px"
            backgroundColor="rgba(67,168,84,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Chat Feedback"
            {...getOverrideProps(overrides, "Chat FB Button40371051")}
          ></Button>
          <Button
            width="232px"
            height="49px"
            position="absolute"
            top="41px"
            left="630px"
            backgroundColor="rgba(191,64,191,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Voice Feedback"
            {...getOverrideProps(overrides, "Voice FB Button4066338")}
          ></Button>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="195px"
            height="30px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="111px"
            left="259px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Time: "}${incident?.callStartTime}`}
            {...getOverrideProps(overrides, "Incident Time4066362")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="195px"
            height="30px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="111px"
            left="37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Date: "}${incident?.startDate}`}
            {...getOverrideProps(overrides, "Incident Date4066363")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="319px"
            height="30px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="70px"
            left="37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Agent: "}${agent?.name}`}
            {...getOverrideProps(overrides, "Agent Name4066364")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="26px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="450px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="17.89px"
            left="36.54px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={incident?.summary}
            {...getOverrideProps(overrides, "Incident Summary4066365")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="1241px"
          height="148.91px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="512px"
          left="411px"
          {...getOverrideProps(overrides, "Group 3 Parent")}
        >
          <Icon
            width="1241px"
            height="148.91px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1241,
              height: 148.91290283203125,
            }}
            paths={[
              {
                d: "M0 0L1241 0L1241 148.913L0 148.913L0 0Z",
                fill: "rgba(8,39,69,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Rectangle 140371053")}
          ></Icon>
          <Button
            width="241px"
            height="53px"
            position="absolute"
            top="45px"
            left="976px"
            backgroundColor="rgba(67,168,84,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Chat Feedback"
            {...getOverrideProps(overrides, "Chat FB Button40371056")}
          ></Button>
          <Button
            width="232px"
            height="49px"
            position="absolute"
            top="47px"
            left="630px"
            backgroundColor="rgba(191,64,191,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Voice Feedback"
            {...getOverrideProps(overrides, "Voice FB Button4066346")}
          ></Button>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="195px"
            height="30px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="111px"
            left="259px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Time: "}${incident?.callStartTime}`}
            {...getOverrideProps(overrides, "Incident Time4066358")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="195px"
            height="30px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="111px"
            left="37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Date: "}${incident?.startDate}`}
            {...getOverrideProps(overrides, "Incident Date4066359")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="319px"
            height="30px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="70px"
            left="37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Agent: "}${agent?.name}`}
            {...getOverrideProps(overrides, "Agent Name4066360")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="26px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="450px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="17.89px"
            left="36.54px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={incident?.summary}
            {...getOverrideProps(overrides, "Incident Summary4066361")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="1241px"
          height="148.91px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="327px"
          left="411px"
          {...getOverrideProps(overrides, "Group 2 Parent")}
        >
          <Icon
            width="1241px"
            height="148.91px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1241,
              height: 148.91000366210938,
            }}
            paths={[
              {
                d: "M0 0L1241 0L1241 148.91L0 148.91L0 0Z",
                fill: "rgba(8,39,69,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Rectangle 140371043")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="195px"
            height="32.39px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="112.5px"
            left="263px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Time: "}${incident?.callStartTime}`}
            {...getOverrideProps(overrides, "Incident Time4066354")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="195px"
            height="32.39px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="111.54px"
            left="37.46px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Date: "}${incident?.startDate}`}
            {...getOverrideProps(overrides, "Incident Date4066355")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="319px"
            height="32.39px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="calc(50% - 16.2px - 0.71px)"
            left="calc(50% - 159.5px - 423.54px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Agent: "}${agent?.name}`}
            {...getOverrideProps(overrides, "Agent Name4066356")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="26px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="450px"
            height="23.75px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="11px"
            left="37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={incident?.summary}
            {...getOverrideProps(overrides, "Incident Summary4066357")}
          ></Text>
          <Button
            width="235px"
            height="51.83px"
            position="absolute"
            top="39.95px"
            left="976px"
            backgroundColor="rgba(67,168,84,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Chat Feedback"
            {...getOverrideProps(overrides, "Chat FB Button40371046")}
          ></Button>
          <Button
            width="232px"
            height="52.91px"
            position="absolute"
            top="39.95px"
            left="630px"
            backgroundColor="rgba(191,64,191,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Voice Feedback"
            {...getOverrideProps(overrides, "Voice FB Button4066334")}
          ></Button>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="1241px"
          height="148.91px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="120px"
          left="411px"
          {...getOverrideProps(overrides, "Group 1 Parent")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="1241px"
            height="148.91px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 1")}
          >
            <Icon
              width="1241px"
              height="148.91px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1241,
                height: 148.91290283203125,
              }}
              paths={[
                {
                  d: "M0 0L1241 0L1241 148.913L0 148.913L0 0Z",
                  fill: "rgba(8,39,69,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Rectangle 140371059")}
            ></Icon>
            <Button
              width="241px"
              height="49px"
              position="absolute"
              top="49px"
              left="976px"
              backgroundColor="rgba(67,168,84,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Leave Chat Feedback"
              {...getOverrideProps(overrides, "Chat FB Button40371062")}
            ></Button>
            <Button
              width="232px"
              height="49px"
              position="absolute"
              top="51px"
              left="630px"
              backgroundColor="rgba(191,64,191,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Leave Voice Feedback"
              {...getOverrideProps(overrides, "Voice FB Button4066330")}
            ></Button>
            <Text
              fontFamily="Inter"
              fontSize="22px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.07px"
              width="195px"
              height="30px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="111px"
              left="259px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${"Time: "}${incident?.callStartTime}`}
              {...getOverrideProps(overrides, "Incident Time4066350")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="22px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.07px"
              width="195px"
              height="30px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="111px"
              left="37px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${"Date: "}${incident?.startDate}`}
              {...getOverrideProps(overrides, "Incident Date4066351")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="22px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.07px"
              width="319px"
              height="30px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="70px"
              left="37px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${"Agent: "}${agent?.name}`}
              {...getOverrideProps(overrides, "Agent Name4066352")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="26px"
              fontWeight="600"
              color="rgba(255,255,255,1)"
              lineHeight="30px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="450px"
              height="22px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="17.89px"
              left="36.54px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={incident?.summary}
              {...getOverrideProps(overrides, "Incident Summary4066353")}
            ></Text>
          </View>
        </View>
        <SearchField
          width="300px"
          height="unset"
          label="Search by Agent Name"
          placeholder="Agent Name"
          position="absolute"
          top="120px"
          left="20px"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
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
          width="300px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="28.89%"
          bottom="68.33%"
          left="calc(50% - 150px - 790px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search by Agent ID"
          {...getOverrideProps(overrides, "label")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="357px"
          height="95px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="490px"
          left="20px"
          {...getOverrideProps(overrides, "Date/Time Filter Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="36px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="357px"
            height="43px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Filter by Date/Time"
            {...getOverrideProps(overrides, "Filter by Date/Time")}
          ></Text>
          <SelectField
            width="300px"
            height="unset"
            placeholder="Date/Time"
            position="absolute"
            top="43px"
            left="0px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "SelectField")}
          ></SelectField>
        </View>
      </View>
    </View>
  );
}
