import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../utils/API/api";



const Reviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReviews(movieId).then(res => setReviews(res.results))
    }, [movieId])

    setTimeout(() => {
        console.log(reviews)

    }, 2000);

    return (
        <div>
            <ul>
                {reviews.map((element) => {
                    return (
                        <li key={element.id}>
                            <h3>Author: {element.author}</h3>
                            <p>{element.content}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Reviews