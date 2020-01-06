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
    }
}