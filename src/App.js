import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Contents from "./Contents.js";
import Footer from "./Footer.js";
import Loading from "./Loading.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Contents />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
