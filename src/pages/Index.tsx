import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import Navbar from "@/components/layout/Navbar";
import Dashboard from "@/components/dashboard/Dashboard";

const Index = () => {
  const [user, setUser] = useState<{ type: 'user' | 'admin' } | null>(null);

  const handleLogin = (userType: 'user' | 'admin') => {
    setUser({ type: userType });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar userType={user.type} onLogout={handleLogout} />
      <Dashboard userType={user.type} />
    </div>
  );
};

export default Index;
