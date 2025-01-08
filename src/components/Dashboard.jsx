import React from 'react';
import CombinedForm from '../components/CombinedForm';

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Smart Campus Hostels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CombinedForm />
      </div>
    </main>
  );
}
