"use client";

import React, { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const Highlight = (): JSX.Element => {
  useEffect(() => {
    // console.log(document.body);
    hljs.highlightAll();
  }, []);

  return <></>;
};

export default Highlight;
