// src/Hooks/useMedia.jsx
import React from "react";

function useMedia(media) {
  const [match, setMatch] = React.useState(
    () => window.matchMedia(media).matches,
  );

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(media);

    const listener = (event) => setMatch(event.matches);

    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [media]);

  return match;
}

export default useMedia;
