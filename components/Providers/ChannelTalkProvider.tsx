"use client";

import { useEffect } from "react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import Button from "../ui/Button";
import Typography from "../ui/Typography";

export default function ChannelTalkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_PLUGIN_KEY || "",
      customLauncherSelector: "#custom-button-2",
      hideChannelButtonOnBoot: true,
    });
  }, []);
  return (
    <>
      {children}
      <Button
        id="custom-button-2"
        size="lg"
        className="fixed right-10 bottom-10 z-50 animate-pulse hover:animate-none shadow-lg hover:shadow-xl transition-shadow rounded-full"
      >
        <Typography.H4 className="relative">
          <span className="absolute -right-1 -top-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive/50 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
          </span>
          1:1 교육문의
        </Typography.H4>
      </Button>
      {/* <Button
        id="custom-button-2"
        size="lg"
        className="fixed right-4 bottom-4 z-50"
      >
        <Typography.H4>1:1 교육문의</Typography.H4>
      </Button> */}
    </>
  );
}
