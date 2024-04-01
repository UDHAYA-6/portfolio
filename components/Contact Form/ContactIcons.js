import React from "react";
import { Text, Box, Stack, rem } from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";
import classes from "./ContactIcons.module.css";

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "udhaya.codes@gmail.com", icon: IconAt },
  { title: "Phone", description: "+91 917636XXXX", icon: IconPhone },
  {
    title: "Address",
    description: "Chennai, Tamil Nadu, India",
    icon: IconMapPin,
  },
  { title: "Working hours", description: "10 a.m. – 8 p.m.", icon: IconSun },
];

export default function ContactIconsList() {
  const items = MOCKDATA.map((item, index) =>
    React.createElement(ContactIcon, { key: index, ...item })
  );
  return React.createElement(Stack, null, items);
}
