"use client";
import React, { useState } from "react";
import { deleteTodo } from "@/app/serverActions";
import { useRouter } from "next/navigation";

export default function TodoForm() {
  const router = useRouter();

  const onButtonClick = () => {
    router.refresh();
  };

  return (
    <button
      onClick={() => {
        onButtonClick();
      }}
    >
      Refresh
    </button>
  );
}
