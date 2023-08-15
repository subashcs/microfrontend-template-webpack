import React, { useRef, useEffect } from "react";
import counterWrapper from "app3/counterWrapper";


const App3Wrapper = () => {
  const divRef = useRef(null);

  useEffect(() => {
    counterWrapper(divRef.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div ref={divRef}></div>
    </div>
  );
};

export default App3Wrapper;