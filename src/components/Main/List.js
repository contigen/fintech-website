import React from "react";

const List = () => {
  const features = [
    "Quick transfers",
    "Initiate one-time and recurring payments",
    "Payment verification",
    "Instant virtual cards creation",
    "Customer verification",
  ];
  return (
    <ul className="list-disc">
      {features.map((feat, idx) => (
        <li key={idx} className="my-5 tracking-wide text-orange-500">
          {feat}
        </li>
      ))}
    </ul>
  );
};

export default List;
