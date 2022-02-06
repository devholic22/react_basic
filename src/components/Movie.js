import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres = null }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>
        <Link to="/movie">{title}</Link>
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
  coverImg: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired
};
export default Movie;
