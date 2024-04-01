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
import React, { useState } from "react";
import ContactIconsList from "./ContactIcons";
import classes from "./ConatctUs.module.css";

export default function ContactUs() {
  const [FormData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const HandleChange = (event) => {
    const { value, id } = event.target;
    setFormData((preState) => ({ ...preState, [id]: value }));
  };

  const FormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submission working");
    const data = await submitFormDataToServer(FormData);
    alert(data.msg);
    setFormData({
      Name: "",
      Email: "",
      Message: "",
    });
  };
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
        <form className={classes.form} onSubmit={FormSubmit}>
          <TextInput
            required
            id="Name"
            label="Name"
            placeholder="Your name"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            value={FormData.Name}
            onChange={HandleChange}
          />
          <TextInput
            id="Email"
            label="Email"
            placeholder="your@gmail.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
            value={FormData.Email}
            onChange={HandleChange}
          />

          <Textarea
            id="Message"
            required
            label="Your message"
            placeholder="I want to connect..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            value={FormData.Message}
            onChange={HandleChange}
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
