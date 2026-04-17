import React from "react";
import { FloatingDock } from "@/components/ui/layouts";
import { IconBrandGithub, IconBrandX, IconHome } from "@tabler/icons-react";
import { SiLeetcode } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

export function FooterFloatingDock() {
  const links = [
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-blue-600" />,
      href: "https://x.com/shahyad92026",
    },
    {
      title: "LinkedIn",
      icon: <SlSocialLinkedin className="h-full w-full text-blue-600" />,
      href: "https://www.linkedin.com/in/kaka-gulpi-498688403?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-blue-600" />,
      href: "/",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-blue-600" />,
      href: "https://github.com/kurd547",
    },
    {
      title: "Leetcode ",
      icon: <SiLeetcode className="h-full w-full text-blue-600" />,
      href: "https://leetcode.com/u/Shahyad12/",
    },
  ];
  return (
    <div className="flex items-center justify-center my-2 w-full">
      <FloatingDock items={links} />
    </div>
  );
}
