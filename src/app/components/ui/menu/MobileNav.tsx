import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Icon from '@/components/content/Icon';
import styles from '@/styles/MobileNav.module.css';
import { useGetHrefWithAnchor } from '@/hooks/useGetHrefWithAnchor';

export const MobileNav = () => {
  const getHref = useGetHrefWithAnchor();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles["button"]}>
          <Icon name="hamburger" size={20} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles["content"]} side='top' align='end' onCloseAutoFocus={(e) => e.preventDefault()}>
          <DropdownMenu.Item onSelect={() => window.location.href = getHref("/", "#home")} className={styles["item"]}>
            <Icon name="home" size={20} />
            Home
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => window.location.href = getHref("/", "#portfolio")} className={styles["item"]}>
            <Icon name="folder" size={20} />
            Portfolio
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => window.location.href = getHref("/", "#contact")} className={styles["item"]}>
            <Icon name="email-2" size={20} />
            Contact
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}