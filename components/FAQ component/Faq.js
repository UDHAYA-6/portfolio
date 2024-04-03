"use client";
import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import image from "@/public/FAQ.svg";
import classes from "./faq.module.css";

export default function FAQ() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        {/* <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={image.src}
              alt="Frequently Asked Questions"
              className={classes.img}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>
                  What technologies are you proficient in?
                </Accordion.Control>
                <Accordion.Panel>
                  I am proficient in a range of technologies, including
                  React.js, Next.js and various tools like Git,Gitlab, and
                  MongoDB.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                  Can you provide examples of projects you've worked on?
                </Accordion.Control>
                <Accordion.Panel>
                  Certainly! I have worked on diverse projects, including an
                  e-commerce platform built with React.js and Node.js. You can
                  find more details in the "Projects" section of my portfolio
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                  Do you have experience working in a team?
                </Accordion.Control>
                <Accordion.Panel>
                  I have experience working in collaborative environments. My
                  roles have involved close collaboration with cross-functional
                  teams, which has enhanced my communication and teamwork
                  skills.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  What motivates you as a developer
                </Accordion.Control>
                <Accordion.Panel>
                  I am motivated by the opportunity to create meaningful and
                  impactful solutions. Solving complex problems, learning new
                  technologies, and seeing the positive outcomes of my work are
                  constant sources of motivation
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid> */}

        <Grid id="faq-grid">
          <Grid.Col>
            <Image
              src={image.src}
              alt="Frequently Asked Questions"
              className={classes.img}
            />
          </Grid.Col>
          <Grid.Col>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>
                  What technologies are you proficient in?
                </Accordion.Control>
                <Accordion.Panel>
                  I am proficient in a range of technologies, including
                  React.js, Next.js and various tools like Git,Gitlab, and
                  MongoDB.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                  Can you provide examples of projects you've worked on?
                </Accordion.Control>
                <Accordion.Panel>
                  Certainly! I have worked on diverse projects, including an
                  e-commerce platform built with React.js and Node.js. You can
                  find more details in the "Projects" section of my portfolio
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                  Do you have experience working in a team?
                </Accordion.Control>
                <Accordion.Panel>
                  I have experience working in collaborative environments. My
                  roles have involved close collaboration with cross-functional
                  teams, which has enhanced my communication and teamwork
                  skills.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  What motivates you as a developer
                </Accordion.Control>
                <Accordion.Panel>
                  I am motivated by the opportunity to create meaningful and
                  impactful solutions. Solving complex problems, learning new
                  technologies, and seeing the positive outcomes of my work are
                  constant sources of motivation
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
