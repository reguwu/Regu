"use client";

import { useEffect, useRef, useState } from 'react';
import styles from "@/styles/ToastySubmitButton.module.css";
import { Toast } from '@/components/ui/toast';

interface Props {
  title: string;
  description: string;
}

export const ToastySubmitButton = ({ title, description }: Props) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      <button
        className={styles["button"]}
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Submit
      </button>
      <Toast title={title} description={description} open={open} setOpen={setOpen} />
    </>
  );
}
