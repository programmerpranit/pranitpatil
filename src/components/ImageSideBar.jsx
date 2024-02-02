import { handleApiError } from "@/helpers/apierror";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ImageSideBar = () => {
  const [media, setMedia] = useState(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const [images, setImages] = useState([]);

  const [search, setSearch] = useState("");

  const searchImages = async (e) => {
    e.preventDefault();

    try {
      const url = `${BASE_URL}/api/admin/image/search`;

      const res = await axios.get(url, {
        params: {
          search: search,
        },
      });

      setImages(res.data.images);
    } catch (error) {
      console.log(error);
    }
  };

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

  const copyUrl = () => {
    navigator.clipboard.writeText(url);
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
        <input
          className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
          type="file"
          accept="image/*"
          onChange={(e) => setMedia(e.target.files[0])}
          required
        />
        <img src={media ? URL.createObjectURL(media) : ""} alt="" />

        {url != "" && (
          <p
            onClick={copyUrl}
            className="text-center my-2 cursor-pointer text-primary font-semibold"
          >
            Copy Url
          </p>
        )}

        <form onSubmit={(e) => searchImages(e)}>
          <input
            type="text"
            className="px-3 py-2 border border-secondary rounded outline-none w-full my-5"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Images"
          />
        </form>
        <div className="flex flex-wrap p-4">
          {images.map((img) => (
            <div
              key={img._id}
              className="border flex flex-col items-center gap-2 w-1/2 p-1"
            >
              <Image
                src={img.url}
                alt=""
                className="flex-1 object-contain "
                width={200}
                height={200}
              />
              <p
                className="p-2 cursor-pointer"
                onClick={() => navigator.clipboard.writeText(img.url)}
              >
                Copy Url
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSideBar;
