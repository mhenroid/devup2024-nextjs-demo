"use client";

import { useEffect, useState } from "react";

function getTime() {
  return new Date().toJSON();
}

export default function Home() {
  let date = getTime();

  return (
    <>
      <span>Client Time: {date}</span>
      {/* <span suppressHydrationWarning>Client Time: {date}</span> */}
    </>
  );
}
