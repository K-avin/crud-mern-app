import axios from "axios";
import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class MoviesTable extends Component {

    deleteMoviedata = () =>{
        axios.delete(
            'http://localhost:8000/mflix/delete-movie/' + this.props.obj._id,
        )
        .then((res) => {
            console.log('Movie Data Successfully deleted')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return(
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.director}</td>
                <td>{this.props.obj.year}</td>
                <td>{this.props.obj.type}</td>
                <td>{this.props.obj.language}</td>
                <td>
                <Link className="edit-link" 
                to={'/update-movie/' + this.props.obj._id}
                >
                Edit
                </Link>
                <Link className="delete-link" onClick={this.deleteMoviedata}
                to={''}
                >
                Delete
                </Link>
                </td>
            </tr>
        )
    }

}