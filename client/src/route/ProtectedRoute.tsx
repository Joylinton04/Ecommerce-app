import useSessionUser from "@/query/useSession";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type props = {
    children: ReactNode
}


export default function ProtectedRoute({ children }: props) {
  const { data: user, isLoading } = useSessionUser();

  // While checking session → show loader or nothing
  if (isLoading) return

  // If no user → redirect to auth page
  if (!user) return <Navigate to="/auth" replace />;

  return children;
}
