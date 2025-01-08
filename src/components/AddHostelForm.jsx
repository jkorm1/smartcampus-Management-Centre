import React, { useState } from 'react';
import { addHostel } from '../services/api';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function AddHostelForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [handle, setHandle] = useState('');
  const [category, setCategory] = useState('normal'); // Add category state
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAlertMessage(''); // Clear previous alert

    try {
      const response = await addHostel({ name, image, price, handle, category }); // Include category in the request
      // Reset form
      const hostelId = response.hostelId; // Get the newly created hostel ID // Reset form
      setName('');
      setImage('');
      setPrice('');
      setHandle('');
      setCategory('normal'); // Reset category to default
      // Set success alert
      setAlertType('success');
      setAlertMessage(`Hostel added successfully with ID: ${hostelId}`);
    } catch (error) {
      // Set error alert
      setAlertType('error');
      setAlertMessage('Failed to add hostel.');
      console.error('Failed to add hostel:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add New Hostel</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="handle">Handle</Label>
            <Input
              id="handle"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="p-2 w-full text-lg rounded border border-gray-300"
            >
              <option value="popular">Popular</option>
              <option value="top">Top</option>
              <option value="normal">Normal</option>
            </select>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Hostel'}
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
}
