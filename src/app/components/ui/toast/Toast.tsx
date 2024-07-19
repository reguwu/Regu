import * as RToast from '@radix-ui/react-toast';
import styles from "@/styles/Toast.module.css";
import Icon from '@/components/content/Icon';

interface Props {
  title: string;
  description: string;
  open?: boolean;
  setOpen: (open: boolean) => void;
}

export const Toast = ({ title, description, open, setOpen }: Props) => {

  return (
    <div className={styles["container"]}>
      <RToast.Provider>
        <RToast.Root className={styles["root"]} open={open} onOpenChange={setOpen}>
          <RToast.Title className={styles["title"]}>{title}</RToast.Title>
          <RToast.Description className={styles["description"]} >{description}</RToast.Description>
          <RToast.Close className={styles["close"]}>
            <Icon name="close" size={20} />
          </RToast.Close>
        </RToast.Root>
        <RToast.Viewport className={styles["viewport"]} />
      </RToast.Provider>
    </div>
  );
}
