import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/api/posts";



const inter = Inter({ subsets: ["latin"] });


interface Post {
  id: string;
  title: string;
  date: string;
}



export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>


      <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title} <p>{post.date}</p> </li>
         
        ))}
      </ul>
    </div>


      </main>
    </>
  );
}
