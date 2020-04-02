class Usuario {
    constructor (email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    colocaAdmin (){
        this.admin = true;
    }
    
    isAdmin () {
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor (email, senha) {
        super(email,senha)
        super.colocaAdmin()
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');


console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

/* Para definir um usuario como admin crio um usuario normal e no construtor do admin 
chamo uma função criada que altera o valor de admin de false para true
*/