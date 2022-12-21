import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../utils/API/api";



const Reviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReviews(movieId).then(res => setReviews(res.results))
    }, [movieId])

    console.log(reviews)

    return (
        (reviews.length)
            ? <div>
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
            : "We don't have any reviews for this movie."
    );
}

export default Reviews