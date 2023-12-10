import axios from "axios"

export default {
    fetch() {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: 'http://127.0.0.1:9090/blog/fetch',
            }).
                then(res => {
                    resolve(res)
                }).
                catch(err => {
                    reject(err)
                })

        })
    },

    fetchMDTextByUUID(uuid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: `http://127.0.0.1:9090/blog/fetch-text/${uuid}`,
            }).
                then(res => {
                    resolve(res)
                }).
                catch(err => {
                    reject(err)
                })

        })
    },
    editBlog(blog) {
        console.log(blog);
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: `http://127.0.0.1:9090/blog/edit/${blog.uuid}`,
                data: {
                    newUUID: blog.newUUID,
                    title: blog.title,
                    mdText: blog.mdText,
                }
            }).
                then(res => {
                    resolve(res)
                }).
                catch(err => {
                    reject(err)
                })

        })
    },
    delBlogByUUID(uuid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'delete',
                url: `http://127.0.0.1:9090/blog/del/${uuid}`,
            }).
                then(res => {
                    resolve(res)
                }).
                catch(err => {
                    reject(err)
                })

        })
    }
}