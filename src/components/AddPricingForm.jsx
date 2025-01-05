// smartcampus Management Centre/src/components/AddPricingForm.jsx
import React, { useState } from 'react';
import { Button, Input, Form, FormField, FormLabel, FormControl } from './ui/form';
import { addPricing } from '../services/api'; // Import the API function

const AddPricingForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [amenities, setAmenities] = useState('');
    const [hostelId, setHostelId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await addPricing({ title, price, amenities, hostel_id: hostelId });
            console.log(response.message); // Handle success
        } catch (error) {
            console.error('Error adding pricing:', error); // Handle error
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormField>
                <FormLabel>Title</FormLabel>
                <FormControl>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter pricing title" />
                </FormControl>
            </FormField>
            <FormField>
                <FormLabel>Price</FormLabel>
                <FormControl>
                    <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
                </FormControl>
            </FormField>
            <FormField>
                <FormLabel>Amenities</FormLabel>
                <FormControl>
                    <Input value={amenities} onChange={(e) => setAmenities(e.target.value)} placeholder="Enter amenities" />
                </FormControl>
            </FormField>
            <FormField>
                <FormLabel>Hostel ID</FormLabel>
                <FormControl>
                    <Input type="number" value={hostelId} onChange={(e) => setHostelId(e.target.value)} placeholder="Enter hostel ID" />
                </FormControl>
            </FormField>
            <Button type="submit">Add Pricing</Button>
        </Form>
    );
};

export default AddPricingForm;