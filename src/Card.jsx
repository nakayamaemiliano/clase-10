import "./Card.css";

const Card = ({data}) => {

  if (!data) {
    return null;
  }

  const { nombre, pais, email } = data;
  return (
    <>
      <div className="card-container">
        <h2>Tu lugar Favorito</h2>
        <p>Nombre De tu Lugar Favorito: {nombre}</p>
        <p>Pais: {pais} </p>
        <p>Email: {email} </p>
      </div>
    </>
  );
};

export default Card;
