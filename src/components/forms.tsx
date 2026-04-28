// src/components/forms.tsx
'use client';

import { useState } from 'react';
import { Input, Button } from '@/components/ui';
import { clsx } from 'clsx';
import { lucideReactIcons } from '@src/util/lucide-react-icons';

export interface CreateEntityFormType {
  title: string;
  parties: string;
  value: number;
  type: string;
  deadline: Date;
  notes: string;
}

export const CreateEntityForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [parties, setParties] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [created, setCreated] = useState(false);

  const handleSubmit = () => {
    if (title && parties && value && type && deadline && notes) {
      const entity = {
        title,
        parties,
        value,
        type,
        deadline,
        notes,
      };
      console.log(entity);
      setCreated(true);
      setTitle('');
      setParties('');
      setValue(0);
      setType('');
      setDeadline(new Date());
      setNotes('');
    }
  };

  return (
    <div className="card p-4">
      <h2 className="mb-4">Create Entity</h2>
      <form>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Parties"
            value={parties}
            onChange={(e) => setParties(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="number"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="date"
            placeholder="Deadline"
            value={deadline.toISOString().slice(0, 10)}
            onChange={(e) => setDeadline(new Date(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={handleSubmit}>Create</Button>
        </div>
      </form>
      {created && (
        <div className="bg-green-100 border border-green-500 text-green-800 p-4 mt-4 rounded">
          Entity created successfully!
        </div>
      )}
    </div>
  );
};

export interface FilterState {
  search: string;
  status: string;
  dateRange: string;
}

export const FilterBar: React.FC = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');

  return (
    <div className="card p-4">
      <h2 className="mb-4">Filter</h2>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="block w-full pl-10 py-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Date Range"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
        />
      </div>
    </div>
  );
};

export const ExportButton: React.FC = () => {
  const handleExport = () => {
    const csvData = 'Title,Parties,Value,Type,Deadline,Notes\n';
    // Mock data for demonstration purposes
    const entities = [
      { title: 'Entity 1', parties: 'Parties 1', value: 100, type: 'Type 1', deadline: '2024-01-01', notes: 'Notes 1' },
      { title: 'Entity 2', parties: 'Parties 2', value: 200, type: 'Type 2', deadline: '2024-01-02', notes: 'Notes 2' },
    ];
    entities.forEach((entity) => {
      csvData += `${entity.title},${entity.parties},${entity.value},${entity.type},${entity.deadline},${entity.notes}\n`;
    });
    const a = document.createElement('a');
    a.href = `data:text/csv;charset=utf-8,${csvData}`;
    a.target = '_blank';
    a.download = 'entities.csv';
    a.click();
  };

  return (
    <Button onClick={handleExport}>Export to CSV</Button>
  );
};