"use client";

import { useEffect } from "react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

export default function ChannelTalkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_PLUGIN_KEY || "",
    });
  }, []);
  return <>{children}</>;
}
