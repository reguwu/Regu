'use client';

import React from 'react';
import { IoIosSearch } from "react-icons/io";
import styles from "@styles/Search.module.css";
 
export const Search = ({ placeholder }: { placeholder: string }) => {
  function handleSearch(term: string) {
    console.log(term);
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
      />
    </div>
  );
}