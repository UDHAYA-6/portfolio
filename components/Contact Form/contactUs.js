"use client";
import submitFormDataToServer from "@/components/Contact Form/server";
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
} from "@mantine/core";
import { useFormState } from "react-dom";
import React from "react";
import ContactIconsList from "./ContactIcons";
import classes from "./ConatctUs.module.css";

export default function ContactUs() {
  const [returnValue, action] = useFormState(submitFormDataToServer, undefined);
  if (returnValue != undefined) {
    alert(returnValue);
  }

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contact me</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and I will get back to you within 24 hours
          </Text>

          <ContactIconsList />
        </div>
        <form className={classes.form} action={action}>
          <TextInput
            required
            name="Name"
            label="Name"
            placeholder="Your name"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            name="Email"
            label="Email"
            placeholder="your@gmail.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Textarea
            name="Message"
            required
            label="Your message"
            placeholder="I want to connect..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" className={classes.control}>
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}
