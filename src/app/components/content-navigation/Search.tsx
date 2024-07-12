import React from 'react';
import { IoIosSearch } from "react-icons/io";
import styles from "@styles/Search.module.css";
import { useSearchParams, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
 
export const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    // replace(`${pathname}?${params.toString()}`, {scroll: false});
    window.history.replaceState(null, '', `${pathname}?${params.toString()}`);
  }, 300);
 
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