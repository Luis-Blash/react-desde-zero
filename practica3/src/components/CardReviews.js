import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class CardReviews extends Component {
    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: []
    }

    componentDidMount() {
        this.fetchReviewers()
    }

    // https://jikan.moe/
    fetchReviewers = async () => {
        this.setState({ loading: true, error: null })
        try {
            const reponse = await fetch(`https://api.jikan.moe/v3/anime/1/reviews/${this.state.nextPage}`);
            const data = await reponse.json();
            const dataContinue = [].concat(this.state.data, data.reviews);
            this.setState({ loading: false, data: dataContinue, nextPage: this.state.nextPage + 1 })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        return (
            <Fragment>
                <h1>Reviews</h1>
                {this.state.data.map(element => (
                    <div className="div-animes" key={element.mal_id}>
                        <h2>Reviewer</h2>
                        <div className="info-reviewer">
                            <div className="score-reviewer">
                                <p>Score Animation: {element.reviewer.scores.animation}</p>
                            </div>
                            <div className="data-reviewer">
                                <p>Name: {element.reviewer.username}</p>
                                <p>Episodes seen: {element.reviewer.username}</p>
                            </div>
                            <div className="btn-reviewer">
                                <Link to={`/reviewer/${element.reviewer.username}`}>Ir</Link>
                            </div>
                        </div>
                        <div className="img-anime">
                            <img src={element.reviewer.image_url} alt={element.reviewer.username} />
                        </div>
                    </div>
                ))}
                {this.state.loading && (
                    <div className="loader">
                        <h1>Cargando</h1>
                        <p>{this.state.error}</p>
                    </div>
                )}
                {!this.state.loading && (
                    <button className="btn-reviews" onClick={() => this.fetchReviewers()}>Load</button>
                )}
            </Fragment>
        );
    }
}

export default CardReviews;