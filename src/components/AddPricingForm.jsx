import React, { useState } from 'react';
import { addPricing } from '../services/api';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const AddPricingForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [amenities, setAmenities] = useState('');
    const [hostelId, setHostelId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState(''); // 'success' or 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setAlertMessage(''); // Clear previous alert

        try {
            await addPricing({ title, price, amenities, hostel_id: hostelId });
            // Reset form
            setTitle('');
            setPrice('');
            setAmenities('');
            setHostelId('');
            // Set success alert
            setAlertType('success');
            setAlertMessage('Pricing added successfully!');
        } catch (error) {
            // Set error alert
            setAlertType('error');
            setAlertMessage('Failed to add pricing.');
            console.error('Failed to add pricing:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Add New Pricing</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input
                            id="price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="amenities">Amenities</Label>
                        <Input
                            id="amenities"
                            value={amenities}
                            onChange={(e) => setAmenities(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="hostelId">Hostel ID</Label>
                        <Input
                            id="hostelId"
                            type="number"
                            value={hostelId}
                            onChange={(e) => setHostelId(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Adding...' : 'Add Pricing'}
                    </Button>
                </form>
                {alertMessage && (
                    <div
                        className={`mt-4 p-2 text-white ${
                            alertType === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                    >
                        {alertMessage}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default AddPricingForm;
