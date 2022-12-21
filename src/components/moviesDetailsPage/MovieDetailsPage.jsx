import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../utils/API/api';
import styles from "./movieDetailsPage.module.css"

const MovieDetailsPage = () => {

    const location = useLocation()
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        if (movieId)
            getMovieDetails(movieId).then(res => setMovie(res))
    }, [movieId])

    const back = location.state?.from ?? '/movies';

    if (!movie) return "Please wait"

    return (
        <>
            <div>
                <Link to={back}>Go back</Link>
                <div className={styles.container}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={`${movie?.title}`}
                        width="200"
                    />
                    <div className={styles.info}>
                        <h2>
                            {movie.title} ({movie?.release_date.slice(0, 4)})
                        </h2>
                        <p>
                            User Score: {Number.parseFloat(movie?.vote_average * 10).toFixed(0)}%
                        </p>
                        <h3 className={styles.overview}>Overview</h3>
                        <p>{movie?.overview}</p>
                        <h3 className={styles.genres}>Genres</h3>
                        <p>
                            {movie.genres.map(genre => genre.name + " ")}
                        </p>
                    </div>
                </div>
                <div className={styles.additional_info}>
                    <p className={styles.paragraph}>Additional Information</p>
                    <ul>
                        <li className={styles.itemLink}>
                            <Link to="cast">Cast</Link>
                        </li>
                        <li className={styles.itemLink}>
                            <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                </div>
                <Suspense fallback={"Please wait..."}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
}

export default MovieDetailsPage
