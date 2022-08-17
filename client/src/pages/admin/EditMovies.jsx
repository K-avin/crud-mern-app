import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateMovies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            director: '',
            year: '',
            type: '',
            language: ''
        }
    }
    onChangeTitle = (event) => {
        // console.log(event.target.value)
        this.setState({ title: event.target.value })
    }

    onChangeDirector = (event) => {
        this.setState({ director: event.target.value })
    }

    onChangeYear = (event) => {
        this.setState({ year: event.target.value })
    }

    onChangeType = (event) => {
        this.setState({ type: event.target.value })
    }

    onChangeLanguage = (event) => {
        this.setState({ language: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log("I am Working")
        const movieObject = {
            title: this.state.title,
            director: this.state.director,
            year: this.state.year,
            type: this.state.type,
            language: this.state.language
        }
        axios.post('http://localhost:8000/mflix/update-movie' + this.props.match.params.id, movieObject)
            .then((res) => {
                console.log(res.data)
                console.log("Movie Successfully updated")
            }).catch((error) => {
                console.log(error)
            })

        // Redirect to list movies
        this.props.history.push('/list-movies')
    }

    componentDidMount() {
        axios.get('http://localhost:8000/mflix/edit-movie/' + this.props.match.params.id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    title: res.data.title,
                    director: res.data.director,
                    year: res.data.year,
                    type: res.data.type,
                    language: res.data.language
                });
            }).catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitle} />
                </Form.Group>

                <Form.Group controlId="Director">
                    <Form.Label>Director</Form.Label>
                    <Form.Control type="text" value={this.state.director} onChange={this.onChangeDirector} />
                </Form.Group>

                <Form.Group controlId="Year">
                    <Form.Label>Relese year</Form.Label>
                    <Form.Control type="number" value={this.state.year} onChange={this.onChangeYear} />
                </Form.Group>

                <Form.Group controlId="Type">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" value={this.state.type} onChange={this.onChangeType} />
                </Form.Group>

                <Form.Group controlId="Language">
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" value={this.state.language} onChange={this.onChangeLanguage} />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" className="mt-4" type="submit">
                    Update Movie
                </Button>
            </Form>
        </div>
        )
    }
}