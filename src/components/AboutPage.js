import React, { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";

function AboutPage() {
  const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://dog.ceo/api/breeds/image/random")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  const fetchImage = useCallback(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    fetchImage();
  }, [fetchImage]);
  return (
    <>
      <Button onClick={fetchImage}>Try new puppy!</Button>
      {/* <img src={data.message} /> */}
      {data.message && <img src={data.message} alt="API image" loading="lazy" height="400px" width="500px"/>}
    </>
  );
}
export default AboutPage;
