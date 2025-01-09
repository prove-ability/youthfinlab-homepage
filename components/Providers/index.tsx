"use client";

import { ThemeProvider } from "./ThemeProvider";
import { ChannelTalkProvider } from "./ChannelTalk/ChannelTalkProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <ChannelTalkProvider>{children}</ChannelTalkProvider>
    </ThemeProvider>
  );
}
