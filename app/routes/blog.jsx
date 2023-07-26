import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import styles from "~/styles/blog.css";
import { ListadoPosts } from "~/components/listado-posts";

export function meta() {
  return [
    {
      title: "GuitarLA - Nuestro Blog",
      description: "GuitarLA, blog de música y venta de Guitarras",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader() {
  const post = await getPosts();

  return post.data;
}

export function Blog() {
  const posts = useLoaderData();
  return (
    <main className="contenedor">
      <ListadoPosts posts={posts} />
    </main>
  );
}

export default Blog;
