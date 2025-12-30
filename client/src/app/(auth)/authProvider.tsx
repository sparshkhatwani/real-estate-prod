"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

// Mock user for fake authentication
const mockUser = {
  username: "testuser",
  userId: "010be580-60a1-70ae-780e-18a6fd94ad32",
};

const Auth = ({ children }: { children: React.ReactNode }) => {
  const user = mockUser;
  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage = pathname.match(/^\/(signin|signup)$/);
  const isDashboardPage =
    pathname.startsWith("/manager") || pathname.startsWith("/tenants");

  // Redirect authenticated users away from auth pages
  useEffect(() => {
    if (user && isAuthPage) {
      router.push("/");
    }
  }, [user, isAuthPage, router]);

  // Allow access to public pages without authentication
  if (!isAuthPage && !isDashboardPage) {
    return <>{children}</>;
  }

  return <div className="h-full">{children}</div>;
};

export default Auth;
