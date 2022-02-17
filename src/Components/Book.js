import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Container } from "react-bootstrap";

export default function Book(props) {
  const [isLoading, setIsLoading] = useState(true);

  // let getBookNamesURL = "https://warm-reef-17230.herokuapp.com/api/v1/picturebook/getAllPictureBookNames"
  // let getBookNamesURL = "https://warm-reef-17230.herokuapp.com/api/v1/getBookList"

  useEffect(() => {
    axios
      .get("https://warm-reef-17230.herokuapp.com/api/v1/getBookList")
      .then((json) => {
        //console.log("json.data:", json.data);
        props.setBooks(json.data);
        setIsLoading(false);
      })
      .catch((err) => console.log("err:", err));
  }, []);

  const displayImages = (e) => {
    console.log("in displayImages:", e.target.value);
    props.setBook(e.target.value);
  };

  return (
    <Container className="mt-4">
      {isLoading ? (
        <p>Please wait...</p>
      ) : (
        <>
          <p>Choose a book</p>
          <Form.Select
            aria-label="Default select example"
            onChange={displayImages}
          >
            <option>books...</option>
            {props.books.map((book, i) => {
              return (
                <option key={i} value={book}>
                  {book}
                </option>
              );
            })}
          </Form.Select>
        </>
      )}
    </Container>
  );
}
