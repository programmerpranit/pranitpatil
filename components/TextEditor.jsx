import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Image from '@tiptap/extension-image'

const TextEditor = ({content, setContent}) => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: content,
  });

  const handleContentChange = () => {
    console.log(editor.getHTML());
    setContent(editor.getHTML());
  }


  return (
    <>
    <MenuBar editor={editor}/>
      <EditorContent className="mt-5" onBlur={handleContentChange} editor={editor} />
    </>
  );
};

export default TextEditor;
