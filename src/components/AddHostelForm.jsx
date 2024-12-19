import React, { useState } from 'react';
import { Button, Input, Form, FormField, FormLabel, FormControl } from './ui/form';

const AddHostelForm = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [handle, setHandle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add your API call here to submit the form data
        console.log({ name, image, price, handle });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormField>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter hostel name" />
                </FormControl>
            </FormField>
            <FormField>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                    <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" />
                </FormControl>
            </FormField>
            <FormField>
                <FormLabel>Price</FormLabel>
                <FormControl>
                    <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
                </FormControl>
            </FormField>
            <FormField>
                <FormLabel>Handle</FormLabel>
                <FormControl>
                    <Input value={handle} onChange={(e) => setHandle(e.target.value)} placeholder="Enter handle" />
                </FormControl>
            </FormField>
            <Button type="submit">Add Hostel</Button>
        </Form>
    );
};

export default AddHostelForm;
