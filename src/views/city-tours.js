import { NavLink } from "react-router-dom";

export default function CityToursBlogs({cityToursBlogs}) {
    
    if  (!Array.isArray(cityToursBlogs)) {
        return(
            <div>Loading...</div>
        )
    } 
    const li_cityToursBlogs = cityToursBlogs.map((blog) => {
        
        const blog_to = "/city-tours/" + blog.id;
        return (
            <section className="preview" key={blog.id}>
                <h4>{blog.title}</h4>
                <p>{blog.content_text.substring(0, 80)} ...</p>
                <NavLink className="link" to={blog_to}>Read more</NavLink>
            </section>
        )
    });

    return (<>{li_cityToursBlogs}</>);
}