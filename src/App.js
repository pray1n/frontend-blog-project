import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories, getBlogs, insertBlogPost } from './controllers/api'
import Categories from './views/categories'
import Blogs from './views/blogs'
import SpecialBlogs from './views/specialblogs'
import AllInclusiveBlogs from './views/allInclusiveBlogs'
import BeachHolidaysBlogs from './views/beachHolidaysBlogs'
import CityToursBlogs from './views/city-tours.js'

import NewBlog from './views/NewBlog'
import Blogdetail from './views/blogs_detail'
import Loader from './views/loader'

function App() {
    const [data, setData] = useState({
        categories: [],
        blogs: [],
        specialblogs: [],
        allInclusiveBlogs: [],
        holidaysBlogs: [],
        cityToursBlogs: [],
    })
    const [isDataLoading, setIsDataLoading] = useState(true)
    const addBlog = async (blog) => {
        const newblog = await insertBlogPost(blog)
        setData((prev) => {
            return { ...prev, newblog }
        })
    }
    async function readData() {
        const blogs = await getBlogs()
        const categories = await getCategories()
        const routeurl = '/frontend-blog-project'
        const specialblogs = blogs.filter((blog) => {
            return blog.special === true
        })
        const nonspecialblogs = blogs.filter((blog) => {
            return blog.special === false
        })
        const allInclusiveBlogs = blogs.filter((blog) => {
            return blog.category_name === 'all-inclusive'
        })
        const holidaysBlogs = blogs.filter((blog) => {
            return blog.category_name === 'beach-holidays'
        })
        const cityToursBlogs = blogs.filter((blog) => {
            return blog.category_name === 'city-tours'
        })

        console.log('Blogs', blogs)
        setData((prev) => {
            return {
                ...prev,
                categories,
                blogs,
                nonspecialblogs,
                specialblogs,
                allInclusiveBlogs,
                holidaysBlogs,
                cityToursBlogs,
            }
        })
        if (data) setIsDataLoading(false)
    }

    useEffect(() => {
        readData()
    }, [])

    return isDataLoading ? (
        <Loader />
    ) : (
        <div id="wrapper">
            <header>
                <h2>Travel blog</h2>
            </header>
            <div id="content">
                <nav>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <Categories categories={data.categories} />
                </nav>
                <main>
                    <Routes>
                        <Route
                            path="${routeurl}/all-inclusive"
                            element={
                                <AllInclusiveBlogs
                                    allInclusiveBlogs={data.allInclusiveBlogs}
                                />
                            }
                        />
                        <Route
                            path="${routeurl}/frontend-blog-project/all-inclusive/:id"
                            element={<Blogdetail blogs={data.blogs} />}
                        />
                        <Route
                            path="${routeurl}/beach-holidays"
                            element={
                                <BeachHolidaysBlogs
                                    holidaysBlogs={data.holidaysBlogs}
                                />
                            }
                        />
                        <Route
                            path="${routeurl}/beach-holidays/:id"
                            element={<Blogdetail blogs={data.blogs} />}
                        />
                        <Route
                            path="${routeurl}/city-tours"
                            element={
                                <CityToursBlogs
                                    cityToursBlogs={data.cityToursBlogs}
                                />
                            }
                        />
                        <Route
                            path="${routeurl}/city-tours/:id"
                            element={<Blogdetail blogs={data.blogs} />}
                        />
                        <Route
                            path="${routeurl}/"
                            element={<Blogs blogs={data.nonspecialblogs} />}
                        />
                        <Route
                            path="${routeurl}/:id"
                            element={<Blogdetail blogs={data.blogs} />}
                        />
                        <Route
                            path="${routeurl}/newblog"
                            element={<NewBlog addBlog={addBlog} />}
                        />
                        <Route
                            path="${routeurl}/login"
                            element={<NewBlog addBlog={addBlog} />}
                        />
                    </Routes>
                </main>
                <aside>
                    <h3>Special offers</h3>
                    <SpecialBlogs specialblogs={data.specialblogs} />
                </aside>
            </div>
        </div>
    )
}

export default App
