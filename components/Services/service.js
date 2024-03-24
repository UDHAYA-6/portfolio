import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
} from "@mantine/core";
import IMAGES from "./images";
import classes from "./service.module.css";

const data = [
  {
    image: "react",
    title: "React js",
    description:
      "From building interactive user interfaces to developing complex single-page applications,to  ensures a seamless and efficient development process",
  },
  {
    image: "next",
    title: "Next js",
    description:
      "Harness the power of Next.js for web projects to optimizing performance, and delivering server-side rendering for enhanced user experiences",
  },
  {
    image: "api",
    title: "API Integration",
    description:
      "Seamlessly integrate APIs in applications, enhancing functionality to ensure smooth communication between your frontend and backend",
  },
  {
    image: "performance",
    title: "Performance Optimization",
    description:
      "Performance optimization techniques, including code splitting, lazy loading, and image optimization, to deliver fast-loading websites",
  },
];

export default function Services() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <Image src={IMAGES[item.image]} alt={item.title} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>Our Services</Text>

      <Title className={classes.title} order={2}>
        TechLand: Where Code Meets Creativity
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Elevate your online business with our expertise in building platforms
          using React.js and Next.js. We focus on creating secure, scalable, and
          user-friendly online stores that drive conversions.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
