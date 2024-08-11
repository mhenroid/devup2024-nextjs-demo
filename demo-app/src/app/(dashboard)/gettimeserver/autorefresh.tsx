"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TodoForm() {
  const [isAutoRefresh, setIsAutoRefresh] = useState(true);
  const router = useRouter();

  let reload = () => {
    if (isAutoRefresh) {
      router.refresh();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      reload();
    }, 1000);
    return () => clearInterval(interval);
  }, [isAutoRefresh]);

  return (
    <>
      <br />
      <select
        onChange={(e) => {
          let shouldRefresh = e.target.value === "refresh";
          setIsAutoRefresh(shouldRefresh);
        }}
      >
        <option value="refresh">Auto refresh</option>
        <option value="">No refresh</option>
      </select>
    </>
  );
}
