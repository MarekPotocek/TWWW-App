class Book {
    constuctor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Kniha 1',
                author: 'Autor 1',
                isbn: '215415646'
            },
            {
                title: 'Kniha 2',
                author: 'Autor 2',
                isbn: '65966'
            }
        ];
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const  row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm
         delete">X</a></td>
        `;

        list.appendChild(row)
    }

    static deleteBook(el) {
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
     }
    }


    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
//zobraz knihy
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//přidání knihy
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Vybrání věci z formuláře
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //ověření
    if(title === '' || author === '' || isbn === ''){
        alert('Prosím doplň data')
    }

    const  book = new Book(title,author,isbn);

    UI.addBookToList(book);

    UI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);
});