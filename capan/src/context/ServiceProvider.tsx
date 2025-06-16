import React, { createContext, useContext, type ReactNode } from "react";
import { UserService } from "../services/UserService";

interface Services {
  userService: UserService;
}

const ServiceContext = createContext<Services | undefined>(undefined);

interface ServiceProviderProps {
  children: ReactNode;
}

export const ServiceProvider: React.FC<ServiceProviderProps> = ({ children }) => {
  const services: Services = {
    userService: new UserService(),
  };

  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = (): Services => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useServices deve ser usado dentro de um ServiceProvider");
  }
  return context;
};
