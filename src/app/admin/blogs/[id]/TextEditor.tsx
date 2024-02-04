"use client";

import { EditorContent, useEditor } from "@tiptap/react";

import Image from "@tiptap/extension-image";
import React, { useEffect, type Dispatch, type SetStateAction } from "react";

// Using ES6 import syntax
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import MenuBar from "@/components/MenuBar";

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

interface TextEditorProps {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  saveBlog: (t: boolean) => void;
}

const TextEditor = ({
  content,
  setContent,
  saveBlog,
}: TextEditorProps): JSX.Element => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        HTMLAttributes: {
          class: " bg-primary bg-opacity-10",
        },
      }),
    ],
    content,
  });

  Image.configure({
    HTMLAttributes: {
      class: "inblog-image",
    },
  });

  const handleContentChange = (): void => {
    console.log(editor?.getHTML());
    setContent(editor?.getHTML() ?? "");
    editor?.setEditable(true);
  };

  useEffect(() => {
    console.log("content is", editor?.getHTML());
  }, [content]);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  // debounce to save blog
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     saveBlog(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [content]);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white py-5">
        <MenuBar editor={editor} />
      </div>
      <EditorContent
        className="mt-5"
        onBlur={handleContentChange}
        value={content}
        // onMouseOut={handleContentChange}
        editor={editor}
      />
    </>
  );
};

export default TextEditor;
