import { handleApiError } from "@/helpers/apierror";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ImageSideBar = () => {
  const [media, setMedia] = useState(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = async (e) => {
    e.preventDefault();

    try {
      const url = `${BASE_URL}/api/admin/image/upload`;

      const data = new FormData();
      data.append("media", media);
      data.append("title", title);

      let res = await axios.post(url, data);

      if (res.status === 200) {
        setUrl(res.data.url);
        toast.success("Image Uploaded Successfully");
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <>
      <div className="p-5">
        <h3>Images</h3>

        <div className="flex justify-between items-center my-5">
          <p>Upload Image</p>
          <button onClick={uploadImage} className="bg-primary">
            Upload
          </button>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-1 px-2 my-2 w-full outline-none"
          placeholder="Image Title"
        />
        <img src={media ? URL.createObjectURL(media) : ""} alt="" />
        <input
          className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
          type="file"
          accept="image/*"
          onChange={(e) => setMedia(e.target.files[0])}
          required
        />

        <div className="flex flex-wrap"></div>
      </div>
    </>
  );
};

export default ImageSideBar;
