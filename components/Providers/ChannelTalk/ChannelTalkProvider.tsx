"use client";

import { useEffect } from "react";
import ChannelService from "./channel-talk.service";

export function ChannelTalkProvider({
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
