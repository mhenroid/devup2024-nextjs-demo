"use client";

import { useEffect, useState } from "react";

function getTime() {
  return new Date().toJSON();
}

export default function Home() {
  const [date, setDate] = useState<string>("default");

  useEffect(() => {
    setDate(getTime());

    const interval = setInterval(() => {
      setDate(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>Client Time: {date}</>;
}
