document.addEventListener('DOMContentLoaded', () => {

    const createBotton = document.querySelector('#save');
    const buttonsAction = document.querySelectorAll('.submit');
    const editButton = document.querySelector('#edit')
    const deleteButton = document.querySelector('#delete');

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

    buttonsAction.forEach(button => {
        button.addEventListener('click', async () => {
            const parent = button.closest('.list-itens');

            const id = parent.getAttribute('data-id');
            const email = parent.getAttribute('data-email');
            const password = parent.getAttribute('data-password');
            const name = parent.getAttribute('data-name');
            const releaseYear = parent.getAttribute('data-releaseYear');
            const author = parent.getAttribute('data-author');

            document.querySelector('#emailEdit').value = email;
            document.querySelector('#passwordEdit').value = password;
            document.querySelector('#nameEdit').value = name;
            document.querySelector('#releaseYearEdit').value = releaseYear;
            document.querySelector('#authorEdit').value = author;

            deleteButton.addEventListener('click', async () => {

                try {
                    const result = await fetch('/delete', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({book: id})
                    });

                    if (!result.ok) {
                        alert('Erro ao deletar usuário');
                    } else {
                        alert('Usuário deletado com sucesso');
                        location.reload();
                    }

                } catch(err) {
                    console.log(err);
                    alert('Erro ao deletar usuário!');
                }

            });

            editButton.addEventListener('click', async () => {
                const emailEdit = document.querySelector('#emailEdit').value;
                const passwordEdit = document.querySelector('#passwordEdit').value;
                const nameEdit = document.querySelector('#nameEdit').value;
                const releaseYearEdit = document.querySelector('#releaseYearEdit').value;
                const authorEdit = document.querySelector('#authorEdit').value;

                const book = {
                    id: id,
                    email: emailEdit,
                    password: passwordEdit,
                    name: nameEdit,
                    releaseYear: releaseYearEdit,
                    author: authorEdit
                }

                // console.log(book)

                try {
                    const result = await fetch('/edit', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({book: book})
                    });

                    if (!result.ok) {
                        alert('Erro ao editar usuário');
                    } else {
                        alert('Usuário editado com sucesso');
                        location.reload();
                    }

                } catch(err) {
                    console.log(err);
                    alert('Erro ao editar usuário!');
                }

            })

        });
    });
    
});