import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

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
          class: ' bg-primary bg-opacity-10',
        },
      }),
    ],
    content: content,
  });

  const handleContentChange = () => {
    console.log(editor.getHTML());
    setContent(editor.getHTML());
  };

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
