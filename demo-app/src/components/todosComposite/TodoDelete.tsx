"use client";
import React from "react";
import { deleteTodo } from "@/app/serverActions";
import { useRouter } from "next/navigation";

export default function TodoForm({ id }: { id: string }) {
  const router = useRouter();

  const onButtonClick = (id: string) => {
    deleteTodo(id).then(() => {
      router.refresh();
    });
  };

  return (
    <button
      onClick={() => {
        onButtonClick(id);
      }}
    >
      Delete
    </button>
  );
}
