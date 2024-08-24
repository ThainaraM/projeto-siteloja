document.getElementById('loyaltyCardForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const cardNumber = document.getElementById('cardNumber').value;

    console.log(`Cartão Fidelidade - Nome: ${name}, Email: ${email}, Telefone: ${phone}, Data de Nascimento: ${dob}, Número do Cartão: ${cardNumber}`);
    alert('Informações enviadas com sucesso!');

    // Redirecionar para a página principal
    window.location.href = 'pagina_principal.html';

    // Resetar o formulário
    document.getElementById('loyaltyCardForm').reset();
});
