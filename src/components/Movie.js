import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres = null }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>
        <Link to={`/movie/${id}`}>
          <h2>{title}</h2>
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: Proptypes.number.isRequired,
  coverImg: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired
};
export default Movie;
