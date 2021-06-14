/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import AboutUsComp from '../components/aboutUs/AboutUs';


export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if(loading) return <h2>loading...</h2>;

  return (
    <div>
      <AboutUsComp />
    </div>
  );
}
