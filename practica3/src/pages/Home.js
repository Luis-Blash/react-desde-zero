import React from "react";
import CardReviews from "../components/CardReviews";
import './style/Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="margin-left">
                    <div className="home">
                        <h1>Welcome to Animelist</h1>
                        <div className="home-info">
                            <p>
                                A reactive practice, where requests are made to an anime api.
                            </p>
                            <p>
                                Jikan is an Unofficial MyAnimeList API. It scrapes the website to satisfy the need for an API - which MyAnimeList lacks.
                                The word Jikan literally translates to Time in Japanese (時間). And that's what this API saves you of. ;)
                                Notice: Jikan does not support authenticated requests. You can not update your lists.
                            </p>
                        </div>
                        <div className="btn btn-home">
                            <a href="https://jikan.docs.apiary.io/#">Jikan</a>
                        </div>
                    </div>
                    <CardReviews />
                </div>
            </React.Fragment>
        );
    }
}