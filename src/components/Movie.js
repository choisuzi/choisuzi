import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../assets/scss/Movie.module.scss";

function Movie({id, year, coverImg, title, summary, genres}) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie_img} src={coverImg} alt={title}/>
      <div>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie_year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie_genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
  year : PropTypes.number.isRequired,
}
export default Movie;