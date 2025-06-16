import React from "react";
import { ServiceProvider } from "./context/ServiceProvider";
import UserProfile from "./components/UserProfile";

const App: React.FC = () => {
  return (
    <ServiceProvider>
      <UserProfile />
    </ServiceProvider>
  );
};

export default App;
