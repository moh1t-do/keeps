'use client'
import { User } from '@firebase/auth'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from '@/firebase/firebase';

function Dashboard(): React.ReactNode {
    const [authUser, setAuthUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return (authUser && <div>Dashboard</div>);
}

export default Dashboard;