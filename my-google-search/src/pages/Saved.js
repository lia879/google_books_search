import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { BookList, BookListItem } from "../components/List";

class Save extends Component {

    // instantiate state for saved books
    state = {
        savedBooks: []
    };

    // loads saved books when Saved page loads
    componentDidMount() {
        this.loadBooks();
    };

    // loads books from database
    loadBooks = event => {

        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data }, function () {
                    console.log(this.state.savedBooks);
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="xs-12">
                            <BookList>
                                {this.state.savedBooks.map(book => {
                                    return (
                                        <BookListItem
                                            key={book._id}
                                            title={book.title}
                                            authors={book.authors}
                                            link={book.link}
                                            description={book.description}
                                            image={book.image}
                                            id={book._id}
                                            loadBooks={this.loadBooks}
                                        />
                                    );
                                })}
                            </BookList>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default Save;