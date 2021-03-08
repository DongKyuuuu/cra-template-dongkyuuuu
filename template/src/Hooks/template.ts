import { useState, useEffect } from "react";

function useTest() {
  const [test, setTest] = useState(null);

  useEffect(() => {
    // logics....
  });

  return test;
}

export { useTest };
