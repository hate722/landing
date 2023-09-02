import { useEffect } from "react";
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
        <title>Error</title>
      </Head>
      <div>
          Something is going wrong...
      </div>
    </div>
  )
};

export default Error;
