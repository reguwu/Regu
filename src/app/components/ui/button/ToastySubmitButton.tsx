import { useEffect, useRef, useState } from 'react';
import styles from "@/styles/ToastySubmitButton.module.css";
import { Toast } from '@/components/ui/toast';

interface Props {
  title: string;
  description: string;
  disabled?: boolean;
}

export const ToastySubmitButton = ({ title, description, disabled }: Props) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      <button id='toasty-submit-button'
        className={styles["button"]}
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        type="submit"
        disabled={disabled}
      >
        Submit
      </button>
      <Toast title={title} description={description} open={open} setOpen={setOpen} />
    </>
  );
}
