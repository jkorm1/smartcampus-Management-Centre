import React, { useState } from 'react';
import { addHostel, addPricing } from '../services/api';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const CombinedForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [hostelPrice, setHostelPrice] = useState('');
  const [handle, setHandle] = useState('');
  const [category, setCategory] = useState('normal');
  const [type, setType] = useState('hostel'); // New state for type
  const [prices, setPrices] = useState([{ title: '', price: '', amenities: '' }, { title: '', price: '', amenities: '' }, { title: '', price: '', amenities: '' }]);
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handlePricingChange = (index, field, value) => {
    const newPrices = [...prices];
    newPrices[index][field] = value;
    setPrices(newPrices);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAlertMessage('');

    try {
      const hostelResponse = await addHostel({ name, image, price: hostelPrice, handle, category, type });
      const hostelId = hostelResponse.hostelId;

      for (const price of prices) {
        await addPricing({ title: price.title, price: price.price, amenities: price.amenities.split(','), hostel_id: hostelId });
      }

      // Reset form
      setName('');
      setImage('');
      setHostelPrice('');
      setHandle('');
      setCategory('normal');
      setType('hostel'); // Reset type
      setPrices([{ title: '', price: '', amenities: '' }, { title: '', price: '', amenities: '' }, { title: '', price: '', amenities: '' }]);

      // Set success alert
      setAlertType('success');
      setAlertMessage('Hostel and Pricing added successfully!');
    } catch (error) {
      // Set error alert
      setAlertType('error');
      setAlertMessage('Failed to add hostel and pricing.');
      console.error('Failed to add hostel and pricing:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Add New Hostel and Pricing</CardTitle>
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
            <Label htmlFor="hostelPrice">Hostel Price</Label>
            <Input
              id="hostelPrice"
              value={hostelPrice}
              onChange={(e) => setHostelPrice(e.target.value)}
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
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="p-2 w-full text-lg rounded border border-gray-300"
            >
              <option value="hostel">Hostel</option>
              <option value="homstel">Homstel</option>
            </select>
          </div>
          {prices.map((price, index) => (
            <div key={index} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`title-${index}`}>Pricing Title {index + 1}</Label>
                <Input
                  id={`title-${index}`}
                  value={price.title}
                  onChange={(e) => handlePricingChange(index, 'title', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`price-${index}`}>Pricing Amount {index + 1}</Label>
                <Input
                  id={`price-${index}`}
                  value={price.price}
                  onChange={(e) => handlePricingChange(index, 'price', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`amenities-${index}`}>Amenities {index + 1} (Comma Separated)</Label>
                <Input
                  id={`amenities-${index}`}
                  value={price.amenities}
                  onChange={(e) => handlePricingChange(index, 'amenities', e.target.value)}
                  required
                />
              </div>
            </div>
          ))}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Hostel and Pricing'}
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

export default CombinedForm;
