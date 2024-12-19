import React from 'react';
import Sidebar from './Sidebar';
import { Card } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import AddHostelForm from './AddHostelForm';
import AddPricingForm from './AddPricingForm';

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4">
                <h1 className="text-2xl font-bold">Management Dashboard</h1>
                <Tabs defaultValue="hostels">
                    <TabsList>
                        <TabsTrigger value="hostels">Hostels</TabsTrigger>
                        <TabsTrigger value="pricing">Pricing</TabsTrigger>
                    </TabsList>
                    <TabsContent value="hostels">
                        <HostelManagement />
                    </TabsContent>
                    <TabsContent value="pricing">
                        <PricingManagement />
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
};

const HostelManagement = () => {
    return (
        <Card className="mt-4">
            <Card.Header>
                <Card.Title>Manage Hostels</Card.Title>
            </Card.Header>
            <Card.Content>
                <AddHostelForm />
            </Card.Content>
        </Card>
    );
};

const PricingManagement = () => {
    return (
        <Card className="mt-4">
            <Card.Header>
                <Card.Title>Manage Pricing</Card.Title>
            </Card.Header>
            <Card.Content>
                <AddPricingForm />
            </Card.Content>
        </Card>
    );
};

export default Dashboard;
