import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { useEffect } from "react";

// Using ES6 import syntax
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

const TextEditor = ({ content, setContent }) => {
  Image.configure({
    HTMLAttributes: {
      class: "inblog-image",
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        rel: "dofollow",
        HTMLAttributes: {
          class: " bg-primary bg-opacity-10",
        },
      }),
    ],
    content: content,
  });

  const handleContentChange = () => {
    console.log(editor.getHTML());
    setContent(editor.getHTML());
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <MenuBar editor={editor} />

      <EditorContent
        className="mt-5"
        onBlur={handleContentChange}
        editor={editor}
      />
    </>
  );
};

export default TextEditor;
