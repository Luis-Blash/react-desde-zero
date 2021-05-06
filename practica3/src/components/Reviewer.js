import React from "react";
import './style/Reviewer.css';


class Reviewer extends React.Component {
    constructor(props) {
        super(props);
        const { id } = this.props.match.params;
        this.state = {
            username: id,
            loading: true,
            error: null,
            data: {}
        }
    }

    componentDidMount() {
        this.fetchReviewer();
    }

    fetchReviewer = async () => {
        this.setState({ loading: true, error: null })
        try {
            const reponse = await fetch(`https://api.jikan.moe/v3/user/${this.state.username}`);
            const data = await reponse.json();
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        return (
            <div className="margin-left">
                {!this.state.loading && (
                    <div className="reviewer-card">
                        <div className="reviewer-info">
                            <div className="reviewer-data">
                                <h1>{this.state.data.username}</h1>
                                <p>Birthday: {this.state.data.birthday}</p>
                                <p>Join: {this.state.data.joined}</p>
                                <p>Location: {this.state.data.location}</p>
                                <div className="reviewer-img">
                                    <img src={this.state.data.image_url} alt={this.state.data.username} />
                                </div>
                            </div>
                        </div>
                        <div className="reviewer-about">
                            <p
                                dangerouslySetInnerHTML={{ __html: this.state.data.about }}
                            />
                        </div>
                    </div>
                )}
                {this.state.loading && (
                    <div className="loader">
                        <h1>Cargando</h1>
                        <p>{this.state.error}</p>
                    </div>
                )}
            </div>
        );
    }
}

//   const Reviewer = ()=>{

//     const {id} = useParams();
//     const [loading, setLoading] = useState();
//     const [user, setUser] = useState();

//     useEffect(()=>{
//         fethcData();
//     },[]);

//     const fethcData = async () => {
//         try{
//             const reponse = await fetch(`https://api.jikan.moe/v3/user/${id}`);
//             const data = await reponse.json();
//             setUser(data);
//             setLoading(true);
//             console.log(user.username);
//       }catch(error){
//             setLoading(false);
//             console.log(`Fallo: ${error}`)
//         }
//     }
//     return(
//         <div>
//             {!loading && (
//                 <h1>Cargando</h1>
//             )}
//             {loading && (
//                 <h1>{user.username}</h1>
//             )}
//         </div>
//     );
// }

export default Reviewer;