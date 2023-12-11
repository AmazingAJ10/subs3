/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function SubCard(props) {
  const { sub, overrides, ...rest } = props;
  const frameFourFourSixOnClick = useNavigateAction({
    type: "url",
    url: "/EditSub",
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="75px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SubCard")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="75px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 10px"
        opacity="0.800000011920929"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Image
          width="60px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="50px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={sub?.Logo}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <View
          width="224px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 445")}
        >
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="224px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={sub?.Name}
            {...getOverrideProps(overrides, "Subscription")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="224px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="28px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={sub?.Price}
            {...getOverrideProps(overrides, "Price")}
          ></Text>
          <View
            width="30px"
            height="30px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5px"
            left="200px"
            padding="0px 0px 0px 0px"
            onClick={() => {
              frameFourFourSixOnClick();
            }}
            {...getOverrideProps(overrides, "Frame 446")}
          >
            <MyIcon
              width="30px"
              height="30px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              type="more_vert"
              {...getOverrideProps(overrides, "MyIcon")}
            ></MyIcon>
          </View>
        </View>
      </Flex>
    </Flex>
  );
}
