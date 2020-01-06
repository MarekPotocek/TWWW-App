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

        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

        list.appendChild(row);
    }
    //odstranení knihy
    static deleteBook(el) {
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
     }
    }
    //custom alert
    static showAlert(message, className){
        const  div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(()=>document.querySelector('.alert').remove(),1500);
    }
   //vyčistí pole po přidání
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
// ukládání/odebírání knih z lokální paměti
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        }else  {
            books = JSON.parse(localStorage.getItem('books'));
        }
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
    const books = Store.getBooks();

        books.forEach((book,index )=> {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
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
        UI.showAlert('Prosím doplň pole', 'danger');
    } else {
        const book = new Book(title, author, isbn);

        UI.addBookToList(book);

        UI.showAlert('Kniha přidána', 'succes');

        UI.clearFields();
    }
});
//smazáni knihy
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);
    UI.showAlert('Kniha smazána', 'succes');
});