import "./Card.css";

const Card = ({ character }) => {
  return (
    <div className="card" key={character.id}>
      <figure className="figure">
        <img src={character.image} alt={character.name} />
        <figcaption>
          <h3>{character.name}</h3>
          {/* <p>{character.status}</p> */}
        </figcaption>
      </figure>
      <div className="card-hover">
      <img src={character.image} alt={character.name} />
        <div className="card-hover-info">
            <span className="info">
                <h4>Status:</h4>
                <p>{character.status}</p>
            </span>
            <span className="info">
                <h4>Type:</h4>
                <p>{character.type}</p>
            </span>
            <span className="info">
                <h4>Specie:</h4>
                <p>{character.species}</p>
            </span>
            <span className="info">
                <h4>Gender:</h4>
                <p>{character.gender}</p>
            </span>
            <span className="info">
                <h4>Origin:</h4>
                <p>{character.origin.name}</p>
            </span>
            <span className="info">
                <h4>Location:</h4>
                <p>{character.location.name}</p>
            </span>
        </div>

      </div>
    </div>
  );
};

export default Card;
