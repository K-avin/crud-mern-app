import axios from "axios";
import Table from 'react-bootstrap/Table'
import React, { Component } from 'react';
import MoviesTable from './MoviesTable'
import { token, user, baseUrl } from "../../constants/constants";

export default class ListMovies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            moviesdatalist: []
        }
    }

    componentDidMount() {

        // if (token === null) {
        //     const headers = null;
        // }
        // else if(token === user.token){
            
        //     const headers = { Authorization: `Bearer ${token}` };

            axios.get(baseUrl + '/mflix', {
                // headers: headers
            })

                .then(res => {
                    console.log(res.data)
                    this.setState({
                        moviesdatalist: res.data

                    });
                })
                .catch((error) => {
                    console.log(error)
                })
        // }return console.log('Unauthorized token')
    }

    DataTable() {
        return this.state.moviesdatalist.map((res, i) => {
            return <MoviesTable obj={res} key={i} />;
        });
    }


    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Release Year</th>
                            <th>Type</th>
                            <th>Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>

                </Table>
            </div>
        )
    }
}