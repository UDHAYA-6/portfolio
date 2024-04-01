"use client";
import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandJavascript,
  IconHtml,
  IconBrandPython,
  IconBrandMongodb,
  IconBrandDjango,
  IconBrandCss3,
} from "@tabler/icons-react";
import classes from "./skill.module.css";

const mockdata = [
  { title: "React js", icon: IconBrandReact, color: "cyan" },
  { title: "Next js", icon: IconBrandNextjs, color: "indigo" },
  { title: "Type script", icon: IconBrandTypescript, color: "blue" },
  { title: "Java script", icon: IconBrandJavascript, color: "yellow" },
  { title: "Html", icon: IconHtml, color: "red" },
  { title: "Python", icon: IconBrandPython, color: "yellow" },
  { title: "Mongodb", icon: IconBrandMongodb, color: "green" },
  { title: "Css", icon: IconBrandCss3, color: "cyan" },
  { title: "Django", icon: IconBrandDjango, color: "green" },
];

export default function Skills() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text className={classes.title}>Tech Stack</Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
