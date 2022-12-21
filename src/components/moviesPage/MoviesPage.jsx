import { useState } from "react";
import { getMovieByQuery } from "../../utils/API/api";
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import Searchbar from "../searchbar/Searchbar";
import styles from "./moviesPage.module.css"
import { useEffect } from "react";


const MoviesPage = () => {

    const location = useLocation()
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();


    const searching = (event) => {
        event.preventDefault()
        setSearchParams({ query: event.target.searchBar.value })
    }

    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            getMovieByQuery(query).then(res => setMovies(res.results))
        }
    }, [searchParams])

    return (
        <>
            <Searchbar searching={searching} />

            {movies.length > 0 && <ul>
                {movies.map(({ title, id }) => (
                    <li key={id}>
                        <Link to={`${id}`} state={{ from: location }}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
            }
        </>
    );
}

export default MoviesPage
