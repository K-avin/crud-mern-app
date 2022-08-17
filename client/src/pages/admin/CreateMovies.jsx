import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function CreateMovies() {
    const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
    const navigate = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuth, setAuth] = useState(true);
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/mflix')
            // .then(res => res.json())
            .then(res => { setContent(res.data); console.log(res.data); })
            .catch(err => console.log(err));

        const verifyUser = async () => {
            if (!cookies.jwt) {
                navigate.push("/login");
            } else {
                const { data } = await axios.post(
                    "http://localhost:8000",
                    {},
                    {
                        withCredentials: true,
                    }
                );
                setAuth(content.status = true); console.log(data);
                if (!data.status) {
                    removeCookie("jwt");
                    navigate.push("/login");
                }

                if (data.length !== 0) {
                    setIsLoading(false);
                }

                //  setAuth(content.status = false)
                //  isGuest = content.status = false;
                // else
                //     toast(`Hi ${data.status} 🦄`, {
                //         theme: "dark",
                //     });
                // console.log(data.user)                
                // console.log(data)
            }
        };
        verifyUser();
    }, [cookies, navigate, removeCookie]);

    const [values, setValues] = useState({
        title: '',
        director: '',
        year: '',
        type: '',
        language: ''
    });

    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
            theme: "dark",
        });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:8000/mflix/create-movie",
                {
                    ...values,
                },
                { withCredentials: true }
            );
            if (data) {
                if (data.errors) {
                    const { title, director, year, type, language } = data.errors;
                    if (title) generateError(title);
                    else if (director) generateError(director);
                    else if (year) generateError(year);
                    else if (type) generateError(type);
                    else if (language) generateError(language);
                } else {
                    navigate.push("/list-movies");
                }
            }
        } catch (ex) {
            console.log(ex);
        }
    };
    return (
        <>
        {/* <div>
            {!isAuth ? (
                <h1>Loading...</h1>
            ) : (
                content.map((movie, movies) => (
                    <h1 key={movies}>
                        {movie.title}
                    </h1>
                )
                )
            )}
        </div> */}
            <div className="form-wrapper">
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId="Title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="Director">
                        <Form.Label>Director</Form.Label>
                        <Form.Control
                            type="text"
                            name="director"
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="Year">
                        <Form.Label>Relese year</Form.Label>
                        <Form.Control
                            type="number"
                            name="year"
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="Type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            type="text"
                            name="type"
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="Language">
                        <Form.Label>Language</Form.Label>
                        <Form.Control
                            type="text"
                            name="language"
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" className="mt-4" type="submit">
                        Create Movie
                    </Button>
                </Form>
                <ToastContainer />
            </div></>

    )
}
export default CreateMovies;
