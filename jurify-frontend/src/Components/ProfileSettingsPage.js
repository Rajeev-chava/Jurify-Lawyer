import React, { useState } from 'react';

const ProfileSettingsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        // Add logic to handle file upload
    };

    const handleSaveChanges = () => {
        // Add logic to save changes
    };

    return (
        <div className=" max-w-lg mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Profile Settings</h2>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
                <input type="file" onChange={handleProfilePictureChange} className="border border-gray-300 p-2 w-full" />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                <input
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                />
            </div>
            <div>
                <button onClick={handleSaveChanges} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default ProfileSettingsPage;
