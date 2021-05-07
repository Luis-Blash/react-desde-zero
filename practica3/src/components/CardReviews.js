import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import './style/CardReviews.css'

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
            //console.log(data)
            const dataContinue = [].concat(this.state.data, data.reviews);
            this.setState({ loading: false, data: dataContinue, nextPage: this.state.nextPage + 1 })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>Reviews</h1>
                    <div className="grid-reviewers">
                        {this.state.data.map(element => (
                            <div className="div-reviewer" key={element.mal_id}>
                                <div className="img-anime">
                                    <img src={element.reviewer.image_url} alt={element.reviewer.username} />
                                </div>
                                <div className="info-reviewer">
                                    <h2>{element.reviewer.username}</h2>
                                    <div className="flex-right">
                                        <div className="btn btn-reviewer">
                                            <Link to={`/reviewer/${element.reviewer.username}`}>Ir</Link>
                                        </div>
                                    </div>
                                    <div className="data-reviewer">
                                        <p>Animation: {element.reviewer.scores.animation}</p>
                                        <p>Episodes seen: {element.reviewer.episodes_seen}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {this.state.loading && (
                    <div className="loader">
                    </div>
                )}
                {!this.state.loading && (
                    <button className="btn btn-reviews" onClick={() => this.fetchReviewers()}>Load</button>
                )}
            </Fragment>
        );
    }
}

export default CardReviews;