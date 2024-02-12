import { defineConfig } from "@tok/generation";

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference
  pages: [
    {
      path: "/",
      slides: [
        {
          extends: "slide",
          title: "Smarter way to automate your crypto trading",
          description:
            "Best crypto trading bots, algorithmic orders, portfolio management and free Demo mode — all in one place",
          textAlign: "center",
          media: {
            type: "image",
            src: import("./assets/img/image-2.png"),

            // style:
          },
          button: {
            to: "/bots",
            content: "Next",
          },
        },
      ],
    },
    {
      path: "/bots",
      slides: [
        {
          extends: "slide",
          title: "Profit from every market move 24/7",
          description:
            "Set up effective back-tested GRID and DCA strategies in a few minutes or build your custom strategies",
          textAlign: "center",
          media: {
            type: "image",
            src: import("./assets/img/image-3.png"),

            // style:
          },
          button: {
            to: "/trust",
            content: "Next",
          },
        },
      ],
    },
    {
      path: "/trust",
      slides: [
        {
          extends: "slide",
          title: "Trusted by traders",
          description:
            'Set up effective back-tested GRID and DCA strategies in a few minutes or build your custom strategies<br/><br /><a href="https://bitsgap.com/?ref=72c38d5a" target="_blank" style="margin-bottom: 20px; display: block"><b>Check reviews!</b></a>',
          textAlign: "center",
          media: {
            type: "image",
            src: import("./assets/img/video-1-2.png"),
            link: {
              href: "https://bitsgap.com/?ref=72c38d5a",
              target: "_blank",
            },
          },
          list: [
            {
              media: {
                type: "emodji",
                src: "🥰",
                // src: import('./assets/icons/time.svg'),
                // style: "margin-top: 30px;"
              },
              text: "<b>Try free</b> for 7 days",
            },
            {
              media: {
                type: "emodji",
                src: "🤑",
              },
              text: "<b>$361M</b> gained by GRID bot",
            },
            {
              media: {
                type: "emodji",
                src: "🤩",
              },
              text: "<b>83%</b> success rate",
            },
          ],
          button: {
            to: "/paywall",
            content: "Next",
          },
        },
      ],
    },
    {
      extends: "paywall",
      media: {
        type: "image",
        src: import("./assets/img/pay-1.png"),
        style: 'aspect-ratio: 390/149;',
        aspectRatio: 390 / 149,
      },
      path: "/paywall",
      title: "Level Up Your Crypto Trading",
      description:
        "Empower your crypto strategy with Bitsgap's expert trading bots, conquering markets and profiting 24/7. <br/><br/>Dominate the game — upgrade your trading today! <div style='margin-bottom: 24px;'></div>",
      products: [
        {
          id: "want_to_earn",
          title: "I'm not trader",
          description: "Best offer",
          discount: "Earn $10 from referral",
          price: 0,
        },
        {
          id: "1_month_subscription",
          title: "1 month subscription",
          description: "29$/month",
          discount: "",
          price: 29,
        },
        {
          id: "1_year_subscription",
          title: "1 year subscription",
          description: "23$/month",
          discount: "Discount $72",
          price: 279,
        },
      ],
    },
  ],
});
