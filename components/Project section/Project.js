"use client";
import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import classes from "./project.module.css";

const mockdata = [
  {
    title: "Bus Ticket Booking system",
    image: "/bus.png",
    date: "August 18, 2022",
    link: "https://bus-udhay.vercel.app/",
  },
  {
    title: "Online food ordering application",
    image: "/food.png",
    date: "August 27, 2022",
    link: "https://spicy-udhay.vercel.app/",
  },
  {
    title: "Online furniture store",
    image: "/furniture.png",
    date: "September 9, 2022",
    link: " https://furniture-udhay.vercel.app/",
  },
  {
    title: "Personal portfolio",
    image: "/next.jpg",
    date: "September 12, 2022",
    link: "https://portfolio-udhay.vercel.app/",
  },
];

const openProject = (Link) => {
  window.open(Link);
};

export default async function Projects() {
  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      className={classes.card}
      onClick={() => openProject(article.link)}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} alt={article.title} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl" className={classes.div}>
      <center>
        <h2 className={classes.projectTitle}>Recent Projects</h2>
      </center>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
