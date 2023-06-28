"use client"
import { useSession } from "next-auth/react";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {

  const { push } = useRouter()

  const { status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      push('/admin/user')
    }
  }, [push, status])

  if (status === 'unauthenticated') {
    return (
      <main className="container d-flex">
        <LoginForm />
      </main>
    )
  }

};
