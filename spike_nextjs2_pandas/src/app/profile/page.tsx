"use client";
import { UserType } from "@/models/custom-types";
import React, { useEffect, useState } from "react";

function ProfilePage() {
  const [user, setUser] = useState<UserType | null>(null);

  const fetchUserProfile = async () => {
    const response = await fetch("/api/users?userId=4");
    console.log("response :>> ", response);
    const result = (await response.json()) as UserType;
    console.log("result :>> ", result);
    setUser(result);
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>User profile</h2>
      {user && (
        <div>
          <p>{user.name}</p>
          <p>{user.company.name}</p>
          <p>{user.website}</p>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
