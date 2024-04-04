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
  Icon,
  SearchField,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CallHistory(props) {
  const { agent, incident, overrides, ...rest } = props;
  const buttonThreeEightSixZeroTwoTwoEightSevenOnClick = useNavigateAction({
    type: "url",
    url: "/feedback",
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
      {...getOverrideProps(overrides, "CallHistory")}
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
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group 7")}
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
        <TextField
          width="291px"
          height="36px"
          placeholder="Incident Status"
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
          width="1473px"
          height="156px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="312px"
          left="411px"
          {...getOverrideProps(overrides, "Group 138602267")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="1473px"
            height="156px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 13990202")}
          >
            <Icon
              width="1473px"
              height="156px"
              viewBox={{ minX: 0, minY: 0, width: 1473, height: 156 }}
              paths={[
                {
                  d: "M0 0L1473 0L1473 156L0 156L0 0Z",
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
              {...getOverrideProps(overrides, "Rectangle 13990203")}
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
              height="30px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="111px"
              left="212px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={incident?.time}
              {...getOverrideProps(overrides, "Incident Time3990204")}
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
              children={incident?.date}
              {...getOverrideProps(overrides, "Incident Date3990205")}
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
              width="310px"
              height="30px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="70px"
              left="37px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${"Agent: "}${agent?.name}`}
              {...getOverrideProps(overrides, "Agent Name3990206")}
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
              {...getOverrideProps(overrides, "Incident Summary3990207")}
            ></Text>
            <Button
              width="434.98px"
              height="51px"
              position="absolute"
              top="49px"
              left="988.59px"
              backgroundColor="rgba(67,168,84,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Leave Feedback"
              {...getOverrideProps(overrides, "Button3990208")}
            ></Button>
          </View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="1473px"
          height="156px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="696px"
          left="411px"
          {...getOverrideProps(overrides, "Group 4")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="1473px"
            height="156px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 13990215")}
          >
            <Icon
              width="1473px"
              height="156px"
              viewBox={{ minX: 0, minY: 0, width: 1473, height: 156 }}
              paths={[
                {
                  d: "M0 0L1473 0L1473 156L0 156L0 0Z",
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
              {...getOverrideProps(overrides, "Rectangle 13990216")}
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
              height="30px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="111px"
              left="212px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={incident?.time}
              {...getOverrideProps(overrides, "Incident Time3990226")}
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
              children={incident?.date}
              {...getOverrideProps(overrides, "Incident Date3990218")}
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
              {...getOverrideProps(overrides, "Agent Name3990219")}
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
              {...getOverrideProps(overrides, "Incident Summary3990220")}
            ></Text>
            <Button
              width="434.98px"
              height="51px"
              position="absolute"
              top="49px"
              left="988.59px"
              backgroundColor="rgba(67,168,84,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Leave Feedback"
              {...getOverrideProps(overrides, "Button3990221")}
            ></Button>
          </View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="1473px"
          height="156px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="504px"
          left="411px"
          {...getOverrideProps(overrides, "Group 3")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="1473px"
            height="156px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 13990172")}
          >
            <Icon
              width="1473px"
              height="156px"
              viewBox={{ minX: 0, minY: 0, width: 1473, height: 156 }}
              paths={[
                {
                  d: "M0 0L1473 0L1473 156L0 156L0 0Z",
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
              {...getOverrideProps(overrides, "Rectangle 13990173")}
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
              height="30px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="111px"
              left="212px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={incident?.time}
              {...getOverrideProps(overrides, "Incident Time3990174")}
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
              children={incident?.date}
              {...getOverrideProps(overrides, "Incident Date3990175")}
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
              {...getOverrideProps(overrides, "Agent Name3990176")}
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
              {...getOverrideProps(overrides, "Incident Summary3990177")}
            ></Text>
            <Button
              width="434.98px"
              height="51px"
              position="absolute"
              top="49px"
              left="988.59px"
              backgroundColor="rgba(67,168,84,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Leave Feedback"
              {...getOverrideProps(overrides, "Button3990178")}
            ></Button>
          </View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="1473px"
          height="156px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="120px"
          left="411px"
          {...getOverrideProps(overrides, "Group 238602282")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="1473px"
            height="156px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 138602283")}
          >
            <Icon
              width="1473px"
              height="156px"
              viewBox={{ minX: 0, minY: 0, width: 1473, height: 156 }}
              paths={[
                {
                  d: "M0 0L1473 0L1473 156L0 156L0 0Z",
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
              {...getOverrideProps(overrides, "Rectangle 138602284")}
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
              height="30px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="111px"
              left="212px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={incident?.time}
              {...getOverrideProps(overrides, "Incident Time3987234")}
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
              children={incident?.date}
              {...getOverrideProps(overrides, "Incident Date3987233")}
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
              {...getOverrideProps(overrides, "Agent Name38602285")}
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
              top="18px"
              left="37px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={incident?.summary}
              {...getOverrideProps(overrides, "Incident Summary38602286")}
            ></Text>
            <Button
              width="434.98px"
              height="51px"
              position="absolute"
              top="49px"
              left="988.59px"
              backgroundColor="rgba(67,168,84,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Leave Feedback"
              onClick={() => {
                buttonThreeEightSixZeroTwoTwoEightSevenOnClick();
              }}
              {...getOverrideProps(overrides, "Button38602287")}
            ></Button>
          </View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="1473px"
          height="156px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="888px"
          left="411px"
          {...getOverrideProps(overrides, "Group 6")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="1473px"
            height="156px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 23990182")}
          >
            <Icon
              width="1473px"
              height="156px"
              viewBox={{ minX: 0, minY: 0, width: 1473, height: 156 }}
              paths={[
                {
                  d: "M0 0L1473 0L1473 156L0 156L0 0Z",
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
              {...getOverrideProps(overrides, "Rectangle 13990183")}
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
              height="30px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="111px"
              left="212px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={incident?.time}
              {...getOverrideProps(overrides, "Incident Time3990184")}
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
              children={incident?.date}
              {...getOverrideProps(overrides, "Incident Date3990185")}
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
              {...getOverrideProps(overrides, "Agent Name3990186")}
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
              {...getOverrideProps(overrides, "Incident Summary3990187")}
            ></Text>
            <Button
              width="434.98px"
              height="51px"
              position="absolute"
              top="49px"
              left="988.59px"
              backgroundColor="rgba(67,168,84,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Leave Feedback"
              {...getOverrideProps(overrides, "Button3990188")}
            ></Button>
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
          children="Search by Incident Status"
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
          {...getOverrideProps(overrides, "Group 5")}
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
