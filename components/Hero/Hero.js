"use client";
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "@/public/image2.svg";
import classes from "./Hero.module.css";

const HeroBullets = () => {
  const HireMe = () => {
    window.scrollBy({
      top: 3000,
      behavior: "smooth",
    });
    props.passing();
  };
  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>I'm Udhaya Kumar</Title>
          <Text c="dimmed" mt="md">
            Welcome to My Portfolio! If you're just curious about what I do,
            feel free to dive in.Explore my portfolio and discover how I
            leverage the power of cutting-edge technologies, to bring ideas to
            life.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Technological proficiency</b> –Java Script, React js, Next js ,
              Type script, Redux
            </List.Item>
            <List.Item>
              <b>Innovation and Continuous Improvement</b>
            </List.Item>
            <List.Item>
              <b>Problem-Solving Proficiency</b>
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              onClick={HireMe}
            >
              Hire me
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
};

export default HeroBullets;
