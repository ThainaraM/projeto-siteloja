document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Criação de conta - Usuário: ${username}, Email: ${email}, Senha: ${password}`);
    alert('Conta criada com sucesso!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log(`Login - Email: ${email}, Senha: ${password}`);
    alert('Login realizado com sucesso!');
      
// Resetar o formulário
document.getElementById('createAccountForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log(`Login - Email: ${email}, Senha: ${password}`);
    alert('Login realizado com sucesso!');

    // Redirecionar para a página principal
    window.location.href = 'pagina_principal.html';

    // Resetar o formulário
    document.getElementById('loginForm').reset();
});
