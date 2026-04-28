// src/hooks/useApp.ts
'use client';

import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initial: T): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export const useFilter = <T>(items: T[], fields: string[]) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    const filteredItems = items.filter((item) => {
      const matchSearch = fields.some((field) => String(item[field]).toLowerCase().includes(search.toLowerCase()));
      const matchStatus = status ? item['status'] === status : true;
      return matchSearch && matchStatus;
    });
    setFiltered(filteredItems);
  }, [items, fields, search, status]);

  return { filtered, search, setSearch, status, setStatus };
};

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const close = () => {
    setOpen(false);
    setIsOpen(false);
    setActiveItem(null);
  };

  return { open, close, isOpen, activeItem, setActiveItem };
};

export const useDemoToast = () => {
  const [toast, setToast] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [type, setType] = useState('');

  const showToastMessage = (message: string, type: string) => {
    setToast(message);
    setType(type);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return { toast, showToast, type, showToastMessage };
};