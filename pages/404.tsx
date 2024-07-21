import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div>
      <Head>
        <title>nameSite — 404</title>
      </Head>
      <div>
          Упс! Что-то пошло не так, этой страницы не существует
      </div>
    </div>
  )
};

export default Error;
