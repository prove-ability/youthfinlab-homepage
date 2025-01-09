"use client";

import ThemeProvider from "./ThemeProvider";
import ChannelTalkProvider from "./ChannelTalkProvider";
interface RootProviderProps {
  children: React.ReactNode;
}

export default function RootProvider({ children }: RootProviderProps) {
  return (
    <ThemeProvider>
      <ChannelTalkProvider>{children}</ChannelTalkProvider>
    </ThemeProvider>
  );
}
