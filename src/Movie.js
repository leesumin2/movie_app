import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
function Movies({title, year, summary, poster }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

Movies.prototypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, // 이미지 주소(문자열)가 저장될 예정
};

export default Movies;

