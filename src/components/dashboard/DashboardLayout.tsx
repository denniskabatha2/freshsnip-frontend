
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardNavbar from './DashboardNavbar';
import { useAuth } from '@/contexts/AuthContext';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const DashboardLayout = () => {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) {
    return null;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar toggleSidebar={toggleSidebar} />
      
      {/* Mobile Sidebar Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <DashboardSidebar />
        </div>
        
        {/* Mobile Sidebar */}
        <div 
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-[85vw] sm:w-72 bg-background border-r border-border shadow-lg transition-transform duration-300 ease-in-out transform md:hidden",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium">Dashboard</h2>
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="rounded-full">
              <X size={20} />
              <span className="sr-only">Close sidebar</span>
            </Button>
          </div>
          <DashboardSidebar />
        </div>
        
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
