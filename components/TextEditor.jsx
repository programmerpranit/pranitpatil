import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { useCallback, useEffect } from "react";

// Using ES6 import syntax
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

const TextEditor = ({ content, setContent, saveBlog, editor }) => {
  Image.configure({
    HTMLAttributes: {
      class: "inblog-image",
    },
  });

  const handleContentChange = () => {
    console.log(editor.getHTML());
    setContent(editor.getHTML());
    // saveBlog(false);
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  // debounce to save blog
  useEffect(() => {
    const timeout = setTimeout(() => {
      saveBlog();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [content]);

  return (
    <>
      <EditorContent
        className="mt-5"
        onBlur={handleContentChange}
        // onMouseOut={handleContentChange}
        editor={editor}
      />
    </>
  );
};

export default TextEditor;
