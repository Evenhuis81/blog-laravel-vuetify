let mutations = {
    CREATE_BLOG(state, blog) {
        state.blogs.unshift(blog)
    },
    FETCH_BLOGS(state, blogs) {
        return state.blogs = blogs
    },
    DELETE_BLOG(state, blog) {
        let index = state.blogs.findIndex(item => item.id === blog.id)
        state.blogs.splice(index, 1)
    }

}
export default mutations
