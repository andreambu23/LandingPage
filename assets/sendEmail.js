function sendEmail() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Substitua 'your-email' pelo seu e-mail do Formspree
    var formspreeEndpoint = 'https://formspree.io/f/mbjnlkap';

    var data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    };

    fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            alert('Mensagem enviada com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao enviar mensagem:', error);
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
        });
}