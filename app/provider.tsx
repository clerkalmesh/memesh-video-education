"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext } from "@/context/user-detail-context";

export default function Provider(
    { children } : { children: React.ReactNode }
) {
    const [userDetail, setUserDetail] = useState(null);
    
    useEffect(() => {
        createNewUser();
    }, []);
    
    const createNewUser = async () => {
        const result = await axios.post("/api/user", {
            
        });
        
        console.log(result.data);
        setUserDetail(result?.data);
    };
    
    return (
        <div>
            <UserDetailContext.Provider value={{}}>
                {children}
            </UserDetailContext.Provider>
        </div>
    );
};