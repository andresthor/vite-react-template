import React, { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/fetchers';
import type { User } from '../types';

interface UserContextType {
  users: User[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  return (
    <UserContext.Provider value={{ users, isLoading, error }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
