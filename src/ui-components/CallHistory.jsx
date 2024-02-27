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
  const { overrides, ...rest } = props;
  const buttonThreeEightSixZeroTwoTwoSevenOneOnClick = useNavigateAction({
    type: "url",
    url: "/feedback",
  });
  const buttonThreeEightSixZeroTwoTwoSevenSixOnClick = useNavigateAction({
    type: "url",
    url: "/feedback",
  });
  const buttonThreeEightSixZeroTwoTwoEightOneOnClick = useNavigateAction({
    type: "url",
    url: "/feedback",
  });
  const buttonThreeEightSixZeroTwoTwoEightSevenOnClick = useNavigateAction({
    type: "url",
    url: "/feedback",
  });
  const buttonThreeEightSixZeroTwoTwoNineThreeOnClick = useNavigateAction({
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
          <Icon
            width="1473px"
            height="152.03px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1473,
              height: 152.02548217773438,
            }}
            paths={[
              {
                d: "M0 0L1473 0L1473 152.025L0 152.025L0 0Z",
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
            {...getOverrideProps(overrides, "Rectangle 138602268")}
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
            width="624.12px"
            height="79.32px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="76.68px"
            left="30.78px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Agent ID: 67895&#xA;&#xA;Date/Time: 11/29/2023 | 5:02 pm "
            {...getOverrideProps(
              overrides,
              "Agent ID: 67895 Date/Time: 11/29/2023 | 5:02 pm"
            )}
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
            width="261.96px"
            height="22.36px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="23.76px"
            left="30.78px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sally, Sue"
            {...getOverrideProps(overrides, "Sally, Sue")}
          ></Text>
          <Button
            width="435px"
            height="51.78px"
            position="absolute"
            top="49.57px"
            left="989px"
            backgroundColor="rgba(67,168,84,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Feedback"
            onClick={() => {
              buttonThreeEightSixZeroTwoTwoSevenOneOnClick();
            }}
            {...getOverrideProps(overrides, "Button38602271")}
          ></Button>
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
            {...getOverrideProps(overrides, "Rectangle 138602273")}
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
            width="740.8px"
            height="59.03px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="73.08px"
            left="36.54px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Agent ID: 12156&#xA;&#xA;Date/Time: 11/25/2023 | 9:42 am "
            {...getOverrideProps(
              overrides,
              "Agent ID: 12156 Date/Time: 11/25/2023 | 9:42 am"
            )}
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
            width="310.93px"
            height="22.95px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="18.74px"
            left="36.54px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Richard, Jones  "
            {...getOverrideProps(overrides, "Richard, Jones")}
          ></Text>
          <Button
            width="434.98px"
            height="53.43px"
            position="absolute"
            top="51.33px"
            left="988.59px"
            backgroundColor="rgba(67,168,84,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Feedback"
            onClick={() => {
              buttonThreeEightSixZeroTwoTwoSevenSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button38602276")}
          ></Button>
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
            {...getOverrideProps(overrides, "Rectangle 138602278")}
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
            width="740.8px"
            height="59.03px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="73.08px"
            left="36.54px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Agent ID: 90845&#xA;&#xA;Date/Time: 11/28/2023 | 7:37 am "
            {...getOverrideProps(
              overrides,
              "Agent ID: 90845 Date/Time: 11/28/2023 | 7:37 am"
            )}
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
            width="310.93px"
            height="22.95px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="18.74px"
            left="36.54px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Victoria, Smith"
            {...getOverrideProps(overrides, "Victoria, Smith")}
          ></Text>
          <Button
            width="434.98px"
            height="53.43px"
            position="absolute"
            top="51.33px"
            left="988.59px"
            backgroundColor="rgba(67,168,84,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Leave Feedback"
            onClick={() => {
              buttonThreeEightSixZeroTwoTwoEightOneOnClick();
            }}
            {...getOverrideProps(overrides, "Button38602281")}
          ></Button>
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
          {...getOverrideProps(overrides, "Group 2")}
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
              width="740.8px"
              height="56.35px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="69.76px"
              left="36.54px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Agent ID: 31228&#xA;&#xA;Date/Time: 12/01/2023 | 3:42 pm "
              {...getOverrideProps(
                overrides,
                "Agent ID: 31228 Date/Time: 12/01/2023 | 3:42 pm"
              )}
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
              width="310.93px"
              height="21.91px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="17.89px"
              left="36.54px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="John, Doe"
              {...getOverrideProps(overrides, "John, Doe")}
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
            {...getOverrideProps(overrides, "Group 138602289")}
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
              {...getOverrideProps(overrides, "Rectangle 138602290")}
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
              width="740.65px"
              height="77.52px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="73.33px"
              left="36.8px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Agent ID: 09834&#xA;&#xA;Date/Time: 10/12/2023 |  11:34 am"
              {...getOverrideProps(
                overrides,
                "Agent ID: 09834 Date/Time: 10/12/2023 | 11:34 am"
              )}
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
              width="310.93px"
              height="22.95px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="18.74px"
              left="36.54px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Christopher, Lewis"
              {...getOverrideProps(overrides, "Christopher, Lewis")}
            ></Text>
            <Button
              width="434.98px"
              height="53.43px"
              position="absolute"
              top="51.33px"
              left="988.59px"
              backgroundColor="rgba(67,168,84,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Leave Feedback"
              onClick={() => {
                buttonThreeEightSixZeroTwoTwoNineThreeOnClick();
              }}
              {...getOverrideProps(overrides, "Button38602293")}
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
