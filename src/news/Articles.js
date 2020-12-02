import { Component } from "react";
import axios from "../axios-config";
import ArticleLi from "./ArticleLi";

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
                <h1 className="p-3 mb-2 bg-info text-white" >Blogtastic</h1>
                { !loaded ? <p>Loading....</p> : 
                    <ul className="list-group">
                        {articles.map((article, index) => {
                            let { id, title, tags } = article;
                            return (
                                <ArticleLi
                                    id={ id }
                                    title={ title }
                                    tags={ tags }
                                    key={ id }
                                />
                            );
                        })}
                    </ul>
                }
            </>
        );
    }
}

export default Articles;