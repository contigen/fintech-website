import React from "react";

const Card = () => {
  return (
    <section className="flex justify-between gap-4 flex-col md:flex-row">
      <div className="p-5 rounded-2xl shadow-xl bg-zinc-800">
        <h5>Better Business Expense management</h5>
      </div>
      <div className="p-5 rounded-2xl shadow-xl bg-zinc-800">
        <h5>New revenue lines</h5>
      </div>
      <div className="p-5 rounded-2xl shadow-2xl bg-zinc-800/70 z-10 transform -translate-x-24">
        <h5 className="lg:text-xl">Seamless Business Organization</h5>
      </div>
    </section>
  );
};

export default Card;
