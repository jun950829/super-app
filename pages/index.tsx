import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {

  const router = useRouter();
  console.log(router);

  return (
    <div className="bg-slate-400 py-20 px-10 flex flex-col space-y-5 grid gap-10">
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed"></div>
        <div>
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl">
          Checkout
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl">
          <button onClick={() => router.push("dongpil")}>동필 테스트 페이지 이동</button>
      </div>
    </div>
  );
  
}

export default Home;
