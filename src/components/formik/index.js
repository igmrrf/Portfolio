import React, { useState } from "react";
import { render } from "react-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useFormik = (props) => {
    const [values, setValues] = useState(props.initialValues || {});
    const handleChange = (name) => (event) => {
        event.persist();
        setValues((prev) => ({ ...prev, [name]: event.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        props.onSubmit(values);
    };
    return { values, handleChange, handleSubmit };
};

const App = () => {
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: { name: "", email: "" },
        onSubmit: async (values) => {
            await sleep(500);
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form>
            <label onSubmit={handleSubmit}>Name:</label>
            <input
                type='text'
                value={values.name}
                onChange={handleChange("name")}
            />
            <br />
            <label>Email:</label>

            <input
                type='text'
                value={values.email}
                onChange={handleChange("email")}
            />
            <br />
            <button type='submit'>Sign up</button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
    );
};

render(<App />, document.getElementById("root"));
