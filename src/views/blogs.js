import { NavLink } from "react-router-dom";

export default function Blogs({blogs}) {
    const li_blogs = blogs.map((blog) => {
        const blog_to = "/" + blog.id;
        console.log(blog)
        return (
            <section className="preview" key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.content_text.substring(0, 100)} ...</p>
                <NavLink className="link" to={blog_to}>Read more</NavLink>
            </section>
        );
        
    });

    return (<>{li_blogs}</>);
}