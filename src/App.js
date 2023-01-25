import React from "react";
import axios from "axios";
import Movie from "./Movie";
class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    //js에게 getMovies() 함수는 시간이 필요
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        console.log(movies);
        this.setState({ movies, isLoading: false })
    }
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section class="container">
                {isLoading ? (
                    <div class="loader">
                        <span class="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div class="movies">
                        {movies.map(movie => ( 
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                        />
                    ))}
                    </div>
                    )}
            </section>
        );
    }
}
export default App;