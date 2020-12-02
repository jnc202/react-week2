import Tag from "./Tag";

const Article = ({ title, tags }) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
            { title }
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

export default Article;