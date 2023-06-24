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
          alt={"memo1"}
          src={"samples/portfolio/home/memo1_huhsfy.webp"}
          width={200}
          height={200}
        />
        <h1 className={styles.title}>Welcome to my website!</h1>
        <p className={styles.description}>This is my personal website.</p>
      </Container>
    </main>
  );
}
