"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const BookCallCtx = createContext<Ctx | null>(null);

export function BookCallProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <BookCallCtx.Provider
      value={{
        open,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
      }}
    >
      {children}
    </BookCallCtx.Provider>
  );
}

export function useBookCall() {
  const ctx = useContext(BookCallCtx);
  if (!ctx) throw new Error("useBookCall must be inside <BookCallProvider>");
  return ctx;
}
