declare global {
  interface Window {
    ChannelIO?: (method: string, ...args: unknown[]) => void;
    ChannelIOInitialized?: boolean;
  }
}

interface ChannelTalkBootOptions {
  pluginKey: string;
  memberId?: string;
  profile?: ChannelTalkUserFields;
  hideChannelButtonOnBoot?: boolean;
  zIndex?: number;
  mobileMessengerMode?: "modal" | "drag";
  language?: string;
  memberHash?: string;
  trackDefaultEvent?: boolean;
  trackUtmSource?: boolean;
  trackUtmMedium?: boolean;
  trackUtmCampaign?: boolean;
  trackUtmTerm?: boolean;
  trackUtmContent?: boolean;
  customLauncherSelector?: string;
  hidePopup?: boolean;
  unsubscribe?: boolean;
  appearance?: "light" | "dark" | "system" | string;
  downloadBannerHandle?: boolean;
}

interface ChannelTalkUserFields {
  memberId?: string;
  name?: string;
  email?: string;
  mobileNumber?: string;
  avatarUrl?: string;
  role?: string;
  memberHash?: string;
  profile?: Record<string, unknown>;
  language?: string;
  unsubscribed?: boolean;
}

const ChannelTalkScript = `
!function(){let e=window;if(e.ChannelIO)return;let n=function(){n.c(arguments)};function t(){if(!e.ChannelIOInitialized){e.ChannelIOInitialized=!0;let n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://cdn.channel.io/plugin/ch-plugin-web.js",n.charset="UTF-8";let t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t)}}n.q=[],n.c=function(e){n.q.push(e)},e.ChannelIO=n,t()}();
`;

const instance = {
  boot(options: ChannelTalkBootOptions) {
    if (typeof window !== "undefined" && window.ChannelIO) {
      window.ChannelIO("boot", options);
    }
  },

  shutdown() {
    if (typeof window !== "undefined" && window.ChannelIO) {
      window.ChannelIO("shutdown");
    }
  },

  showMessenger() {
    if (typeof window !== "undefined" && window.ChannelIO) {
      window.ChannelIO("showMessenger");
    }
  },

  hideMessenger() {
    if (typeof window !== "undefined" && window.ChannelIO) {
      window.ChannelIO("hideMessenger");
    }
  },

  openChat(chatId?: string) {
    if (typeof window !== "undefined" && window.ChannelIO) {
      window.ChannelIO("openChat", chatId);
    }
  },

  track(eventName: string, eventProperty?: Record<string, unknown>) {
    if (typeof window !== "undefined" && window.ChannelIO) {
      window.ChannelIO("track", eventName, eventProperty);
    }
  },

  updateUser(userInfo: ChannelTalkUserFields) {
    if (typeof window !== "undefined" && window.ChannelIO) {
      window.ChannelIO("updateUser", userInfo);
    }
  },
};

export { ChannelTalkScript };
export default instance;
