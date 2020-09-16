import React from 'react';
import { Formik, Form, Field } from 'formik';

export default function RegisterMessage () {
    return (
            <div>
            <h1>Sign Up</h1>
            <Formik
            initialValues={{
                command: '',
                message: ''
            }}
            onSubmit={async values => {
                await new Promise(r => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            >
            <Form>
                <label htmlFor="command">Comando</label>
                <Field id="command" name="command" placeholder="Informe o comando" />

                <label htmlFor="message">Mensagem</label>
                <Field component="textarea" id="message" name="message" placeholder="Informe a mensagem" />

                
                <button type="submit">Submit</button>
            </Form>
            </Formik>
        </div>
        )
    };