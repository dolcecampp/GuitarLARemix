import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Sobre Nosotros",
    },
    { description: "Venta de Guitarras, Blog de música" },
    { rel: "preload", href: imagen, as: "image" },
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

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div>
          <p>
            En el corazón de Los Ángeles, se encuentra una tienda de guitarras
            eléctricas conocida como "Guitar-LA". Esta tienda, fundada hace más
            de tres décadas, se ha convertido en un punto de referencia para los
            amantes de la música en la ciudad. Con su fachada llamativa y su
            amplio escaparate lleno de brillantes guitarras eléctricas, atrae a
            músicos de todas partes en busca del sonido perfecto.
          </p>
          <p>
            Al entrar a "Guitar-LA", los clientes son recibidos por el suave
            murmullo de las cuerdas de las guitarras y la energía vibrante que
            flota en el aire. Las paredes están decoradas con fotografías de
            legendarios guitarristas que han pasado por la tienda y han dejado
            su huella en el mundo de la música.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
