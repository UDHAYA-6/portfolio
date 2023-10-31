import React, { useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import Page1 from "@/Admin/Home/page1";
import { useRouter } from "next/router";

const Adminpannel = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const checkSession = async () => {
      const userSession = await getSession();
      if (!userSession) {
        router.push("/admin", undefined, { shallow: true });
      }
    };

    checkSession();
  }, [session]);

  if (session) {
    return (
      <>
        <Page1 />
      </>
    );
  }

  return <div>Loading...</div>;
};

export default Adminpannel;
