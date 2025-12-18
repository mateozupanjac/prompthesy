export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Prompthesy",
  description: "Prompt the prophecy and check the meaning.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    // {
    //   label: "Calendar",
    //   href: "/calendar",
    // },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
  },
};
