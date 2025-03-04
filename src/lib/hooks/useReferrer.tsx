import { useEffect, useState } from "react";

const useReferrer = () => {
  const [referrer, setReferrer] = useState("");

  useEffect(() => {
    setReferrer(document.referrer);
  }, []);

  return referrer;
};

export default useReferrer;
