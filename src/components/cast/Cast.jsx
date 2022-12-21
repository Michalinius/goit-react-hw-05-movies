import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieCredits } from "../../utils/API/api";


const Actors = styled.ul`
display:flex;
flex-direction:column;`

const Cast = () => {

    const { movieId } = useParams();
    const [credits, setCredits] = useState([])

    useEffect(() => {
        getMovieCredits(movieId).then(res => setCredits(res.cast))
    }, [movieId])

    return (
        <>
            <div>
                <Actors>
                    {credits.map((element) => {
                        return (
                            <li key={element.id}>
                                <img width="100px" src={`https://image.tmdb.org/t/p/w500${element.profile_path}`} alt="Actor ugly face" />
                                <p>{element.name} as {element.character}</p>
                            </li>
                        )
                    })}
                </Actors>
            </div>
        </>
    );
}

export default Cast
