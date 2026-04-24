// Example starter JavaScript for disabling form submissions if there are invalid fields
let form = document.getElementById('form-login');

form.addEventListener('submit', function(e){


    e.preventDefault();


    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let endereco = document.getElementById('endereco').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let curso = document.getElementById('curso').value;
    let matricula = document.getElementById('matricula').value;
    
    let confirmarSenha = document.getElementById('confirmarSenha').value;
    let cpf = document.getElementById('cpf').value;
    let cpfCadastrados = ["125678900", "11111111111"];


     if (nome.length < 10)  return alert("Nome tem que ser completo");
     if(!email.includes("@") || !email.includes(".")) return alert("Email Inválido");
     if(telefone.length < 9) return alert("Telefone Inválido");
     if(cpf == "") return alert("CPF Obrigatorio");
     if(cpfCadastrados.includes(cpf)) return alert("CPF já cadastrado");
     if(endereco.length < 20) return alert ("Endereço Inválido");
     if(senha.length < 4 ) return alert("SENHA MUITO CURTA!");
     if(confirmarSenha !== senha) return alert("SENHA ERRADA, NÃO É A MESMA SENHA!");
     if(cidade.length < 3 ) return alert("Nome da cidade muito pequeno");
     if(estado.length < 3 ) return alert("Estado inexistente!");
     if(CEP.length < 8 ) return alert("CEP inválido!");
     if(curso.length < 6) return alert("Curso Inválido");
     if(matricula.length < 4) return alert("Matricula Inválida!");
    

     
       

    

})
