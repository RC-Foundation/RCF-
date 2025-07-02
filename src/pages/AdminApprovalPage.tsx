import React from 'react';
import { usePhoto } from '../contexts/PhotoContext';
import { CheckCircle, XCircle } from 'lucide-react';

const AdminApprovalPage: React.FC = () => {
  const { pendingPhotos, approvePhoto, deletePhoto } = usePhoto();

  return (
    <div className="min-h-screen pt-20 px-6">
      <h1 className="text-2xl font-bold mb-6">Pending Photo Approvals</h1>
      {pendingPhotos.length === 0 && (
        <p>No pending photos.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pendingPhotos.map(photo => (
          <div key={photo.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold mb-2">{photo.title}</h2>
              <p className="text-sm mb-4">{photo.description}</p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => approvePhoto(photo.id)}
                  className="flex items-center space-x-1 bg-emerald-600 text-white px-3 py-1 rounded"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => deletePhoto(photo.id)}
                  className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded"
                >
                  <XCircle className="h-4 w-4" />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminApprovalPage;
