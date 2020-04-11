import axios from 'axios';

class api {
    static async buscaUsuario(usuario) {
        try {
            const response = await axios.get(`https://api.github.com/users/${usuario}`)
            console.log (response.data)
        }catch (err) {
            console.log ('Usuario não existe.')
        }
    }
}

api.buscaUsuario('zpasp')
