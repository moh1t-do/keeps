"use client";
import { User } from "@firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import WishList from "@/components/WishList";
import PostForm from "@/components/PostForm";
import { useRouter } from "next/navigation";

function Dashboard(): React.ReactNode {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
        router.push("/dashboard/login");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return authUser == null ? (
    <h1 className="text-lg text-center">Loading</h1>
  ) : (
    <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
      <WishList />
      <PostForm />
    </div>
  );
}

export default Dashboard;
