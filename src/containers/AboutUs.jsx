/* eslint-disable indent */
import React, { useState, useEffect } from 'react';

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <h2>loading...</h2>;

  return (
    <div>
      <h1>About US</h1>
    </div>
  );
}
