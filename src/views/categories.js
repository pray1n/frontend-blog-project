import { NavLink } from 'react-router-dom'

export default function Categories({ categories }) {
    const li_categories = categories.map((category) => {
        return (
            <li key={category.id}>
                <NavLink className="link" to={category.name}>
                    {category.name}
                </NavLink>
            </li>
        )
    })

    return (
        <ul>
            {li_categories}
            <li>
                <NavLink className="link" to={'/newblog'}>
                    Add New blog
                </NavLink>
            </li>
        </ul>
    )
}
