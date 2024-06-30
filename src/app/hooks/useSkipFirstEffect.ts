import { DependencyList, useEffect, useRef } from "react";

export const useSkipFirstEffect = (callback: () => void, dependencies: DependencyList | undefined) => {
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    callback();
  }, dependencies);
};