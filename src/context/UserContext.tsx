import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  rol: string;
  fechaCreacion?: string;
  fechaActualizacion?: string;
}

const UserContext = createContext<any>(null);


export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('usuario');
    return stored ? JSON.parse(stored) : null;
  });


  // login ahora recibe un objeto usuario
  const login = (usuario: User) => {
    setUser(usuario);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
