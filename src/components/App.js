import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./../notes.js";
function mp(x) {
  return <Note key={x.key} title={x.title} content={x.content} />;
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(mp)}
      <Footer />
    </div>
  );
}

export default App;
