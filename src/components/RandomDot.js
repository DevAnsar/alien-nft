import React, { useEffect } from "react";
import { Box } from "@mui/material";

function RandomDot({ id = 1, count }) {
  function createFlake() {
    const area = document.querySelector(`.random-dot-area-${id}`);

    const areaWidth = area.offsetWidth;
    const areaHeight = area.offsetHeight;

    for (let i = 0; i < count / 2; i++) {
      const span = document.createElement("div");
      span.classList.add("random-dot");
      span.classList.add("random-dot-1");
      span.style.left = Math.random() * areaWidth + "px";
      span.style.top = Math.random() * areaHeight + "px";
      area.append(span);
    }
    for (let i = 0; i < count / 2; i++) {
      const span = document.createElement("div");
      span.classList.add("random-dot");
      span.classList.add("random-dot-2");
      span.style.left = Math.random() * areaWidth + "px";
      span.style.top = Math.random() * areaHeight + "px";
      area.append(span);
    }
  }

  useEffect(() => {
    createFlake();
  }, []);
  return (
    <Box
      className={`random-dot-area-${id}`}
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        right: 0,
        zIndex: 0,
      }}
    />
  );
}
RandomDot.defaultProps = {
  count: 3,
};
export default RandomDot;
