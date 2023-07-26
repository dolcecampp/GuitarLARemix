import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server.js";
import { formatearFecha } from "~/utils/helpers";
import styles from "~/styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta({ data }) {
  if (!data) {
    return [
      {
        title: "GuitarLA - Entrada no encontrada",
        description:
          "GuitarLA - Guitarra, Venta de guitarras, entrada no encontrada",
      },
    ];
  }

  return [
    {
      title: `GuitarLA - ${data?.data[0]?.attributes.titulo}`,
      description: `GuitarLA - Guitarra, Venta de guitarras, entrada ${data.data[0].attributes.titulo}`,
    },
  ];
}

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  console.log(post);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }

  return post;
}

export default function Post() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes;
  console.log(post);
  return (
    <article className="contenedor post mt-3">
      <img
        className="imagen"
        src={imagen?.data?.attributes?.url}
        alt={`Imagen Blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)} </p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
}
