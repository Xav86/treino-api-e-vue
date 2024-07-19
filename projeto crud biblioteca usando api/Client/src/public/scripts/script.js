document.addEventListener('DOMContentLoaded', () => {

    const createBotton = document.querySelector('#save');

    createBotton.addEventListener('click', async () => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const name = document.querySelector('#name').value;
        const releaseYear = document.querySelector('#releaseYear').value;
        const author = document.querySelector('#author').value;

        if (!email || !password || !name || !releaseYear || !author) {
            alert('Necessário preencher todos os campos para realizar esta operação!');
            return; // Para evitar que o fetch seja executado
        }

        const book = {
            email: email,
            password: password,
            name: name,
            releaseYear: releaseYear,
            author: author
        }

        try {
            const result = await fetch('/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({book: book})
            });

            if (!result.ok) {
                alert('Erro ao cadastrar usuário');
            } else {
                alert('Usuário cadastrado com sucesso');
                location.reload();
            }
        } catch(err) {
            console.log(err);
            alert('Erro ao cadastrar usuário!');
        }
    });

    
});