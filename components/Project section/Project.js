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
  },
  {
    title: "Online food ordering application",
    image: "/food.png",
    date: "August 27, 2022",
  },
  {
    title: "Online furniture store",
    image: "/furniture.png",
    date: "September 9, 2022",
  },
  {
    title: "Personal portfolio",
    image: "next.jpg",
    date: "September 12, 2022",
  },
];

export default function Projects() {
  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
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
        <h1>Recent Projects</h1>
      </center>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
