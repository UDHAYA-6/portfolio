import { Button } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        border: "1px solid gray",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <h2>Page Not Found 📣</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button>Return home</Button>
      </Link>
    </div>
  );
}
