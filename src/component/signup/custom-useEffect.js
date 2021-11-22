import { useEffect, useRef } from "react";

export default function useEffectOnSecondRender(fnx, arr) {
  const skipinitialRender = useRef(true);
  return useEffect(() => {
    console.log("skipinitialRender.current", skipinitialRender.current);
    if (skipinitialRender.current) {
      skipinitialRender.current = false;
      return;
    } else {
      console.log("fnx is executing");
      fnx();
    }
  }, [...arr]);
}
