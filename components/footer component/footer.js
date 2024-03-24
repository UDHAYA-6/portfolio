import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./footer.module.css";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Bus ticket booking", link: "https://bus-udhay.vercel.app/" },
      { label: "Furniture store", link: "https://furniture-udhay.vercel.app/" },
      { label: "Food ordering", link: "https://spicy-udhay.vercel.app" },
      { label: "Portfolio", link: "https://portfolio-udhay.vercel.app/" },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/udhaya-kumar-developer",
      },
      {
        label: "Instagram",
        link: "https://www.instagram.com/udhay_kumar_official",
      },
      { label: "Email", link: "#" },
      { label: "GitHub", link: "https://github.com/UDHAYA-6" },
    ],
  },
];

const OpenLink = (link) => {
  window.open(link, "_blank");
};

export default function FooterLinks() {
  const groups = data.map((group, groupIndex) => {
    const links = group.links.map((link, linkIndex) => (
      <Text
        key={linkIndex}
        className={classes.link}
        component="a"
        onClick={() => OpenLink(link.link)}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xl">Thanks for visiting</Text>
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 udhayakumar. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin
              onClick={() =>
                OpenLink("https://www.linkedin.com/in/udhaya-kumar-developer")
              }
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub
              onClick={() => OpenLink("https://github.com/UDHAYA-6")}
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              onClick={() =>
                OpenLink("https://www.instagram.com/udhay_kumar_official")
              }
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
