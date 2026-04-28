// src/components/modals.tsx
'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui';
import { clsx } from 'clsx';

export interface Entity {
  title: string;
  parties: string;
  value: number;
  type: string;
  deadline: string;
  notes: string;
}

export const EntityDetailModal: React.FC<{ item: Entity; open: boolean; onClose: () => void }> = ({ item, open, onClose }) => {
  const [status, setStatus] = useState('');

  const handleApprove = () => {
    // Update local state with a status badge change
    setStatus('Approved');
  };

  const handleReject = () => {
    // Update local state with a status badge change
    setStatus('Rejected');
  };

  const handleArchive = () => {
    // Update local state with a status badge change
    setStatus('Archived');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="card p-4">
        <h2 className="mb-4">{item.title}</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="mb-2">Parties</h3>
            <p className="text-gray-600">{item.parties}</p>
          </div>
          <div>
            <h3 className="mb-2">Value</h3>
            <p className="text-gray-600">{item.value}</p>
          </div>
          <div>
            <h3 className="mb-2">Type</h3>
            <p className="text-gray-600">{item.type}</p>
          </div>
          <div>
            <h3 className="mb-2">Deadline</h3>
            <p className="text-gray-600">{item.deadline}</p>
          </div>
          <div>
            <h3 className="mb-2">Notes</h3>
            <p className="text-gray-600">{item.notes}</p>
          </div>
        </div>
        <div className="mb-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleApprove}>
            Approve
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleReject}>
            Reject
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleArchive}>
            Archive
          </button>
        </div>
        {status && (
          <div className="bg-green-100 border border-green-500 text-green-800 p-4 mt-4 rounded">
            {status}
          </div>
        )}
      </div>
    </Modal>
  );
};

export const ConfirmModal: React.FC<{
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  variant: 'danger' | 'info';
}> = ({ open, onClose, title, message, onConfirm, variant }) => {
  const className = clsx({
    'bg-red-100 border border-red-500 text-red-800': variant === 'danger',
    'bg-gray-100 border border-gray-500 text-gray-800': variant === 'info',
  });

  return (
    <Modal open={open} onClose={onClose}>
      <div className={`card p-4 ${className}`}>
        <h2 className="mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{message}</p>
        <div className="mb-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};