import React from "react";

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="margin-left">
                    <div className="about">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MyAnimeList.png/245px-MyAnimeList.png" alt="MyAnimelist" />
                        <h1>About</h1>
                        <p>
                            MyAnimeList, often abbreviated to MAL, is a virtual community for cataloging and social networking of anime and manga.The website provides its users with a list-based system for organizing and rating anime and manga.It includes a broad a base of anime and manga data, it makes it easy to find new material to view based on the scores that each user has given and allow you to connect with users who share similar tastes.
                    </p>
                        <p>
                            It is the most used anime and manga social network in the West with around 120 million visitors per month in 2015.
                    </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;