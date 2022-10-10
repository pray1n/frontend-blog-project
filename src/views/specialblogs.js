import { NavLink } from "react-router-dom";

export default function SpecialBlogs({specialblogs}) {
    const li_specialblogs = specialblogs.map((blog) => {
        const blog_to = "/" + blog.id;
        return (
            <section className="special" key={blog.id}>
                <h4>{blog.title}</h4>
                <p>{blog.content_text.substring(0, 80)} ...</p>
                <NavLink className="link" to={blog_to}>Read more</NavLink>
            </section>
        );
    });

    return (<>{li_specialblogs}</>);
}