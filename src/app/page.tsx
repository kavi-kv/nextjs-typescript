import Navbar from "@/Components/navbar";
import Image from "next/image";
import PostList from "@/Components/postTitle";

export default function Home() {
  return (
    <>
      {/* <div className="ml-10 mr-10 mt-5"> */}
      {/* <Navbar /> */}
      {/* </div> */}
      <main className="flex min-h-screen flex-wrap items-start  justify-between inset-0 p-24">
        <PostList/>
      </main>
    </>
  );
}
