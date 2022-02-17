import "./styles.css";
import Book from "./Components/Book";
import Pages from "./Components/Pages";
import Page from "./Components/Page";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState } from "react";

export default function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");
  const [pages, setPages] = useState({});

  return (
    <div className="App">
      <Container className="mt-4">
        <h1>LARA Picturebook Object Selector</h1>
        <h5>(Data in LARA Picturebook format)</h5>
        <Book books={books} setBooks={setBooks} setBook={setBook} />
        <Pages pages={pages} setPages={setPages} book={book} />
        {/* <Page
          pages={pages}
          setPages={setPages}
          clickPoints={clickPoints}
          setClickPoints={setClickPoints}
        /> */}
      </Container>
    </div>
  );
}
