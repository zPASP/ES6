import axios from 'axios';

class api {
    static async getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`)
            console.log(response.data);
        }catch(err) {
            console.log(`Usuario não existe`)
        }
    }
}

api.getUserFromGithub('zpasp')
api.getUserFromGithub('zpasas')