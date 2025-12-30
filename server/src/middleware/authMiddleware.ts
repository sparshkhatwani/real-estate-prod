import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: string;
      };
    }
  }
}

export const authMiddleware = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Bypassing authentication check for development
    // Mock user data for testing purposes
    req.user = {
      id: "010be580-60a1-70ae-780e-18a6fd94ad32", // John Smith (Manager)
      role: "manager", // Default role for bypassed auth
    };

    // If you want to allow all roles during bypass, we just call next()
    // Or if you want to strictly check against allowedRoles even with mock:
    // const userRole = req.user.role;
    // const hasAccess = allowedRoles.includes(userRole.toLowerCase());
    // if (!hasAccess) {
    //   res.status(403).json({ message: "Access Denied" });
    //   return;
    // }

    next();
  };
};
