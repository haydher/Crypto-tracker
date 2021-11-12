import React from "react";
import { TrendingCoinsStyle } from "../styles/TrendingCoins.style";
import { Title } from "../styles/Title.style";
import NotificationInput from "./NotificationInput";
import Button from "../Button";
import { PriceNotificationStyle } from "../styles/PriceNotification.style";

const PriceNotification = () => {
 return (
  <TrendingCoinsStyle>
   <Title>Price Change Notification</Title>
   <PriceNotificationStyle>
    <NotificationInput type="number" text="Price Falls Bellow" />
    <NotificationInput type="number" text="Price Goes Above" />
    <NotificationInput type="email" text="Get Email Notification" />
    <Button text="Get Notified" />
   </PriceNotificationStyle>
  </TrendingCoinsStyle>
 );
};

export default PriceNotification;
