import { useEffect, useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { getTrending } from "../../utils/API/api";
import styles from "./homePage.module.css"


const HomePage = () => {

    const [trending, setTrending] = useState([])
    useEffect(() => { getTrending().then(response => setTrending(response.results)) }, [])
    const location = useLocation();

    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {trending.map(movie => {
                    return (
                        <li className={styles.item} key={movie.id}>
                            <NavLink to={`movies/${movie.id}`} state={{ from: location }}>
                                {(!movie.title) ? movie.name : movie.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default HomePage
