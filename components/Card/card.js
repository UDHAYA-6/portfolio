"use server";
import { Text } from "@mantine/core";
import classes from "./card.module.css";

const data = [
  {
    title: "Percentage: 82%",
    stats: "HSC - 2020",
    description:
      "Children's Paradise Matriculation Higher Secondary School, Chennai",
  },
  {
    title: "CGPA: 8.6",
    stats: "B.Tech IT 2020 - 2024",
    description:
      "VelTech High Tech Dr.Rangarajan Dr.Sakunthala Enginnering College, Chennai",
  },
  {
    title: "Project Intern",
    stats: "Current Job",
    description: "IDP Eduaction Ltd, Chennai",
  },
];

export default async function Card() {
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return (
    <center>
      <div className={classes.root}>{stats}</div>
    </center>
  );
}
