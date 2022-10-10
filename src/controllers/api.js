const url = 'http://localhost:8080' //for mock objects

async function getCategories() {
    const response = await fetch(url + '/categories')
    const result = await response.json()
    return result
}

async function getBlogs() {
    const response = await fetch(url + '/blogs')
    const result = await response.json()
    return result
}

async function insertBlogPost(blog) {
    const response = await fetch(url + '/blog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
    })
    if (response.ok) {
        return getBlogs()
    }
    throw Error('Adding blog failed')
}

export { getCategories, getBlogs, insertBlogPost }
