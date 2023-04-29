import React, { useCallback } from "react";

const MenuBar = ({ editor }) => {
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url, target: "_blank" }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }
  return (
    <>
      <div className="flex flex-wrap m-2 ">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 2 }) ? "bg-slate-300" : ""
          } menu-btn `}
        >
          h2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 3 }) ? "bg-slate-300" : ""
          } menu-btn `}
        >
          h3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 4 }) ? "bg-slate-300" : ""
          } menu-btn `}
        >
          h4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 5 }) ? "bg-slate-300" : ""
          } menu-btn `}
        >
          h5
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${
            editor.isActive("paragraph") ? "bg-slate-300" : ""
          } menu-btn`}
        >
          P
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`${
            editor.isActive("bold") ? "bg-slate-300" : ""
          } menu-btn font-bold`}
        >
          B
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${
            editor.isActive("bulletlist") ? "bg-slate-300" : ""
          } menu-btn `}
        >
          UL
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${
            editor.isActive("bold") ? "bg-slate-300" : ""
          } menu-btn `}
        >
          OL
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${
            editor.isActive("codeBlock") ? "bg-slate-300" : ""
          } menu-btn `}
        >
          Code Block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${
            editor.isActive("blockquote") ? "bg-slate-300" : ""
          } menu-btn `}
        >
          Blockquote
        </button>

        <button className="menu-btn" onClick={addImage}>
          setImage
        </button>

        <button onClick={setLink} className={`menu-btn ${editor.isActive('link') ? 'bg-slate-300' : ''}`}>
        setLink
      </button>
      <button
      className="menu-btn"
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive('link')}
      >
        unsetLink
      </button>
      </div>
    </>
  );
};

export default MenuBar;
