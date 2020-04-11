import axios from 'axios';

class api {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data)
        }catch (err){
            console.log('Repositório não encontrado.')
        }
    }
}
api.getRepositories('zPASP/es6')
api.getRepositories('zPASP/asdasds')