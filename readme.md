# Booklibrary REST API

* insert books :Method POST
 http://localhost:8000/addBook

* Get all the books:Method GET
  http://localhost:8000/allBooks

* Get all the book that were published by year:Method GET
  http://localhost:8000/bookByYear?minyr=2016&maxyr=2020

* Get all the books by cost:Method GET
* http://localhost:8000/bookByCost?min=200&max=500
  
  
* Update the cost of all the books by catagory:Method PUT
  http://localhost:8000/updateBook?UpBooks=hooror&cost=800

* Delete book by name:Method DELETE
  http://localhost:8000/deleteBook/:BookId