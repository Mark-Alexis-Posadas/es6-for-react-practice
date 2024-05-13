const items = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const todos = [
  { id: 1, task: "Complete assignment", completed: false },
  { id: 2, task: "Read a book", completed: true },
  { id: 3, task: "Go for a run", completed: false },
];

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 500 },
];

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi" },
  { id: 2, title: "The Shawshank Redemption", genre: "Drama" },
  { id: 3, title: "The Godfather", genre: "Crime" },
];

const fruits = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Orange", color: "Orange" },
];

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

const employees = [
  { name: "Alice", department: "Marketing", salary: 50000 },
  { name: "Bob", department: "Engineering", salary: 70000 },
  { name: "Charlie", department: "Finance", salary: 60000 },
];

const countries = [
  { name: "USA", population: 331000000, capital: "Washington, D.C." },
  { name: "China", population: 1441000000, capital: "Beijing" },
  { name: "India", population: 1380000000, capital: "New Delhi" },
];

export default function Map() {
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {numbers.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name} - {fruit.color}
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} ({book.year})
          </li>
        ))}
      </ul>

      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} - {employee.department} ${employee.salary}
          </li>
        ))}
      </ul>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {country.name} - Population{" "}
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            capital: {country.capital}
          </li>
        ))}
      </ul>
    </>
  );
}
