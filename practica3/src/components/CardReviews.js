import { Component, Fragment } from "react";

class CardReviews extends Component{
    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data:[]
    }

    componentDidMount(){
        this.fetchAnimes()
    }

    // https://jikan.moe/
    fetchAnimes = async () => {
        this.setState({loading: true, error:null})
        try{
            const reponse = await fetch(`https://api.jikan.moe/v3/anime/1/reviews/${this.state.nextPage}`);
            const data = await reponse.json();
            const dataContinue = [].concat(this.state.data, data.reviews);
            console.log(dataContinue)
            this.setState({loading: false, data:dataContinue, nextPage: this.state.nextPage + 1})
        }catch(error){
            this.setState({loading: false, error:error})
        }
    }

    render(){
        return(
            <Fragment>
                <h1>Reviews</h1>
                {this.state.data.map(element => (
                    <div className="div-animes" key={element.mal_id}>
                        <h2>Reviewer</h2>
                        <div className="info-reviewer">
                            <p>Name: {element.reviewer.username}</p>
                            <p>Episodes seen: {element.reviewer.episodes_seen}</p>
                            <div className="socore-reviewer">
                                <p>Score Animation: {element.reviewer.scores.animation}</p>
                            </div>
                        </div>
                        <div className="img-anime">
                            <a href={element.reviewer.url} target="_blank">
                                <img src={element.reviewer.image_url} alt={element.reviewer.username}/>
                            </a>
                        </div>
                    </div>
                ))}
                {this.state.loading && (
                    <h1>Cargando</h1>
                )}
                {!this.state.loading && (
                    <button className="btn-reviews" onClick={()=> this.fetchAnimes()}>Load</button>
                )}
            </Fragment>
        );
    }
}

export default CardReviews;