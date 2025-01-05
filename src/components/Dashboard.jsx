import React from 'react';
import { AddHostelForm } from '../components/AddHostelForm';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Smart Campus Hostels</h1>
      <AddHostelForm />
      {/* You can add your existing hostel list component here */}
    </main>
  );
}

