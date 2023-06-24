"use client";
import { Container } from "@/components/Container";
import { CldImage } from "next-cloudinary";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container
        align={"center"}
        justify={"center"}
        display={"flex"}
        wrap={"wrap"}
        width={"100%"}
      >
        <CldImage
          alt={"memo8"}
          className={styles.iconImage}
          src={"samples/portfolio/home/memo8.webp"}
          width={170.6}
          height={170.6}
        />
      </Container>
    </main>
  );
}
