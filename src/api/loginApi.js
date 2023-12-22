import axios from "axios"


export default {
    login(form) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:9090/user/login',
                data: {
                    username: form.username,
                    password: form.password,
                },
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