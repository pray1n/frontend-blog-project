import { NavLink } from "react-router-dom";

export default function AllInclusiveBlogs({allInclusiveBlogs}) {
    if  (!Array.isArray(allInclusiveBlogs)) {
        return(
            <div>Loading...</div>
        )
    } 
    
    const li_allInclusiveBlogs = allInclusiveBlogs.map((blog) => {
        const blog_to = "/all-inclusive/" + blog.id;
        return (
            <section className="preview" key={blog.id}>
                <h4>{blog.title}</h4>
                <p>{blog.content_text.substring(0, 80)} ...</p>
                <NavLink className="link" to={blog_to}>Read more</NavLink>
            </section>
        )
    });

    return (<>{li_allInclusiveBlogs}</>);
}