"use client";
import submitFormDataToServer from "@/components/Contact Form/server";
import { CircularProgress } from "@mui/material";
import SimpleSnackbars from "../Alter message/alert";
import {
  Text,
  SimpleGrid,
  Button,
  TextInput,
  Textarea,
  Group,
} from "@mantine/core";
import React, { useState } from "react";
import ContactIconsList from "./ContactIcons";
import classes from "./ConatctUs.module.css";
export default function ContactUs() {
  const [snack, setsnack] = useState(false);
  const [msg, setmsg] = useState("Message sent successfully");
  const [status, setstatus] = useState("success");
  const [values, setvalues] = useState({
    Name: "",
    Email: "",
    Message: "",
    Btn: "Send Message",
  });

  const FormAction = async () => {
    const FormData = {
      Name: values.Name,
      Email: values.Email,
      Message: values.Message,
    };
    const response = await submitFormDataToServer(FormData);
    setvalues({
      Name: "",
      Email: "",
      Message: "",
      Btn: "Send Message",
    });
    if (response == 200) {
      setsnack(true);
    }
  };
  const ValuesChange = (event) => {
    const { name, value } = event.target;
    setvalues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={classes.wrapper}>
      {snack && <SimpleSnackbars value={snack} msg={msg} status={status} />}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <h2 className={classes.title}>Contact me</h2>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and I will get back to you within 24 hours
          </Text>

          <ContactIconsList />
        </div>
        <form className={classes.form} action={FormAction}>
          <TextInput
            required
            name="Name"
            label="Name"
            placeholder="Your name"
            value={values.Name}
            onChange={ValuesChange}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <TextInput
            name="Email"
            label="Email"
            placeholder="your@gmail.com"
            required
            value={values.Email}
            onChange={ValuesChange}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            name="Message"
            required
            label="Your message"
            placeholder="I want to connect..."
            minRows={4}
            value={values.Message}
            onChange={ValuesChange}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Group justify="flex-end" mt="md">
            <Button
              type="submit"
              className={classes.control}
              onClick={() =>
                setvalues((prev) => ({
                  ...prev,
                  Btn: (
                    <>
                      sending...
                      <CircularProgress size={22} color="inherit" />
                    </>
                  ),
                }))
              }
            >
              {values.Btn}
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}
