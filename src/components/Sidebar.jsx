import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white">
            <div className="p-4 text-lg font-bold">SmartCampus Management</div>
            <div className="p-4">
                <ul>
                    <li className="py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                    <li className="py-2 hover:bg-gray-700 cursor-pointer">Hostels</li>
                    <li className="py-2 hover:bg-gray-700 cursor-pointer">Pricing</li>
                    <li className="py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
                </ul>
            </div>
            <div className="p-4 text-sm">© 2023 SmartCampus</div>
        </div>
    );
};

export default Sidebar;
