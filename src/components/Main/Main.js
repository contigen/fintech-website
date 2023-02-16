import React from "react";
import List from "./List";
import Checkout from "./../Images/Checkout";
import Card from "../Card/Card";

const Main = () => {
  return (
    <main>
      <h1 className="text-5xl lg:text-7xl leading-normal lg:leading-relaxed">
        <span className="text-orange-400">
          Endless
          <br /> possibilities
        </span>{" "}
        for <br /> every business
      </h1>
      <p className="text-xl lg:text-3xl m-10 lg:m-20">
        Sell online, process payments, build financial products, or use business
        tools designed to grow your business.
      </p>
      <div className="m-10 lg:m-20 flex items-center justify-evenly flex-wrap gap-8">
        <button className="bg-[#0a0e27] text-white">
          Create a free account
        </button>
        <button className="bg-gray-100">Contact sales</button>
      </div>
      <section>
        <p className="text-xl lg:text-3xl m-10 lg:m-20">
          We are trusted by <b>1 Million+</b> businesses, says flutterwave
        </p>
        <div></div>
      </section>
      <h2 className="text-4xl lg:text-6xl leading-tight lg:leading-tight">
        A fully unified <br />
        set of{" "}
        <span className="text-orange-400">
          payments
          <br /> tools
        </span>
      </h2>
      <section className="flex m-10 lg:m-20 flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <span className="text-xl lg:text-2xl font-semibold">Checkout</span>
          <br />
          <br />
          <p>
            Checkout features our smart payment ordering system, incredible
            speed, and beautiful simplicity. It's designed to grow your revenue
            and provide the best payment experience to your customers.
          </p>
          <br />
          <br />
          <button>Get started</button>
        </div>
        <div className="flex-1">
          <Checkout />
        </div>

        <section className="flex-1">
          <span className="text-xl lg:text-2xl font-semibold">
            Accept payments
          </span>
          <br />
          <br />
          <p>Easily receive money from anyone, anywhere in the world.</p>
          <br />
          <br />
          <a href="" className="text-orange-400">
            Learn more {`>`}
          </a>
          <div className="mt-10">
            <span className="text-xl lg:text-2xl font-semibold">
              Transfers (payout)
            </span>
            <br />
            <br />
            <p>Easily receive money from anyone, anywhere in the world.</p>
            <br />
            <br />
            <a href="" className="text-orange-400">
              Learn more {`>`}
            </a>
          </div>
        </section>
        <div></div>
      </section>
      <section className="p-10 lg:p-20 bg-gray-100">
        <h2 className="mx-0 text-4xl lg:text-6xl leading-snug lg:leading-snug">
          Build a successful online
          <br /> business with our <br />
          <span className="text-green-400">Commerce tools.</span>
        </h2>
        <div className=" flex justify-start items-center">
          <div>
            <span className="text-xl lg:text-2xl font-semibold">Store</span>
            <br />
            <br />
            <p>
              Create a free ecommerce website and start selling worldwide with
              just a few clicks.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="flex gap-12 flex-wrap">
          <div>
            <p>
              A platform for you, whether you’re a big business or a solo
              artist, says flutterwave
            </p>
          </div>
          <div>
            <div>
              <span className="text-xl lg:text-2xl font-semibold">
                Invoices
              </span>
              <br />
              <br />
              <p>
                Generate professional invoices for your customers and get paid
                from anywhere.
              </p>
              <br />
              <br />

              <a href="" className="text-orange-400">
                Get started {`>`}
              </a>
            </div>
            <div className="mt-10">
              <span className="text-xl lg:text-2xl font-semibold">
                Payment links
              </span>
              <br />
              <br />

              <p>
                Generate professional invoices for your customers and get paid
                from anywhere.
              </p>
              <br />
              <br />

              <a href="" className="text-orange-400">
                Learn more {`>`}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="p-10 lg:p-20">
        <h2 className="text-4xl lg:text-6xl mx-0 tracking-wider leading-snug lg:leading-snug font-medium">
          Let’s play to our strengths, shall we? You focus on bringing your
          amazing ideas to life and we focus on providing all the{" "}
          <span className="text-green-300">commerce tools</span> you need.
        </h2>
        <button>okay, let's go</button>
      </section>
      <section className="p-10 lg:p-20 bg-zinc-900 text-white">
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl mx-0 tracking-wider leading-snug lg:leading-snug">
            Create physical and
            <br /> virtual <span className="text-[#6672c7]">cards</span>
          </h2>
        </div>
        <div className="text-center ">
          <p className="m-5 tracking-wider lg:text-xl">
            Issue physical and virtual cards that work globally. Create,
            <br /> launch, and manage your cards easily from anywhere.
          </p>
        </div>
        <div className="text-center m-5">
          <button>Get started with cards</button>
        </div>
        <br />
        <br />
        <Card />
      </section>
      <section className="p-10 lg:p-20 bg-gray-100">
        <h2 className="text-4xl lg:text-6xl mx-0 leading-snug lg:leading-snug">
          Well documented and <br />
          easy-to-use <span className="text-pink-400">APIs</span> for
          <br /> <span className="text-pink-400">developers</span>
        </h2>
        <p className="my-10 tracking-wider lg:text-xl">
          We have done the core payments integrations and abstractions, so your
          team can easily integrate with our APIs and access multiple payment
          functionalities.
        </p>
        <List />
        <div className="my-10"></div>
        <a href="">Read the API docs</a>
      </section>
      <section className="p-10 lg:p-20">
        <h2 className="mx-0 text-4xl lg:text-6xl">
          Our <span className="text-[#6672c7]">global</span> reach
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap gap-0">
          <h4 className="text-2xl lg:text-4xl text-orange-400">
            30+ Currencies
          </h4>
          <h4 className="text-2xl lg:text-4xl text-[#6672c7]">
            20M+ API calls
          </h4>
          <h4 className="text-2xl lg:text-4xl text-green-400">
            500k+ payments daily
          </h4>
        </div>
        <section className="p-10 lg:p-20 flex items-center justify-center bg-zinc-800 text-white rounded-xl shadow-2xl mt-10">
          <div>
            <h3 className="text-3xl lg:text-5xl mx-0">Ready to get started?</h3>
            <p className="tracking-wider lg:text-xl">
              Create an account and instantly start accepting payments, selling
              your beautiful products online and building financial tools.
            </p>
            <br />
            <br />
            <div className="flex justify-center md:justify-start  gap-4 flex-wrap items-center">
              <button className="bg-white text-black">Get started</button>
              <button>Contact sales</button>
            </div>
          </div>
        </section>
      </section>
      <div className="m-10 lg:m-20 flex flex-col">
        <span className="text-xl lg:text-3xl">Developers</span>
        <br />
        <div>
          <span className="text-orange-500 lg:text-xl">
            front-end: <a href="">@contigen</a>
          </span>
          {"  "}
          <span className="text-green-500 lg:text-xl">
            back-end: <a href="">@hussayn</a>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Main;
