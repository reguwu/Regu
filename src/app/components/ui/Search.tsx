import React from 'react';
import { IoIosSearch } from "react-icons/io";
import styles from "@styles/Search.module.css";
import { useSearchParams, usePathname } from 'next/navigation';
 
export const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    // replace(`${pathname}?${params.toString()}`, {scroll: false});
    window.history.replaceState(null, '', `${pathname}?${params.toString()}`);
  }
 
  return (
    <div className={styles["search-box"]}>
      <IoIosSearch className={styles["search-icon"]} />
      <input
        className={styles["search-input"]}
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}