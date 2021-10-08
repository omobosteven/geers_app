import React from 'react';
import { Header, Banner, Analysis, Focus, Success, Quote, Footer } from 'sections';

// The root component rendering the various sections on the application
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Analysis />
        <Focus />
        <Success />
        <Quote />
      </main>
      <Footer />
    </>
  );
};

export default App;
