import { Component } from "react";
import axios from "../axios-config";
import Tag from "./Tag";
import { Link } from "react-router-dom";

class Articles extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            articles: [],
        }
    }

    componentDidMount() {
        axios.get("/articles").then(({data}) => {
            let articles = data.data;
            this.setState({
                loaded: true,
                articles: articles,
            })
        })
    }

    render() {
        let { loaded, articles } =  this.state;

        return(
            <>
                { !loaded ? <p>Loading....</p> : 
                    <ul className="list-group">
                        {articles.map( article => {
                            let { id, title, tags } = article;
                            let route = `/news/${id}`;
                            return (
                                <li 
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                    key={ id }
                                >
                                    <Link to={ route }>{ title }</Link> 
                                    <div>
                                        {tags.map((tag, index) => {
                                            return (
                                                <Tag
                                                    tag={ tag }
                                                    key={ index }
                                                />
                                            );
                                        })}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                }
            </>
        );
    }
}

export default Articles;