import { handleApiError } from "@/helpers/apierror";
import type { IImage } from "@/models/Image";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import Image from "next/image";
import React, { useState, type FormEvent } from "react";
import { toast } from "react-toastify";

interface ImageType extends IImage, MongoBase {}

const ImageSideBar = (): JSX.Element => {
  const [media, setMedia] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const [images, setImages] = useState<ImageType[]>([]);

  const [search, setSearch] = useState("");

  const searchImages = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const url = `${BASE_URL}/api/admin/image/search`;

      const res = await axios.get(url, {
        params: {
          search,
        },
      });

      setImages(res.data.images as ImageType[]);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (): Promise<void> => {
    try {
      const url = `${BASE_URL}/api/admin/image/upload`;

      const data = new FormData();
      data.append("media", media as Blob);
      data.append("title", title);

      const res = await axios.post(url, data);

      if (res.status === 200) {
        setUrl(res.data.url as string);
        toast.success("Image Uploaded Successfully");
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  const copyUrl = (): void => {
    void navigator.clipboard.writeText(url);
  };

  return (
    <>
      <div className="p-5">
        <h3>Images</h3>

        <div className="my-5 flex items-center justify-between">
          <p>Upload Image</p>
          <button
            onClick={() => {
              void uploadImage();
            }}
            className="bg-primary"
          >
            Upload
          </button>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="my-2 w-full border p-1 px-2 outline-none"
          placeholder="Image Title"
        />
        <input
          className="mt-1 w-full rounded-md border px-2 py-1 outline-none"
          type="file"
          accept="image/*"
          onChange={(e) => {
            setMedia(e.target.files == null ? null : e.target.files[0]);
          }}
          required
        />
        <img src={media != null ? URL.createObjectURL(media) : ""} alt="" />

        {url !== "" && (
          <p
            onClick={copyUrl}
            className="my-2 cursor-pointer text-center font-semibold text-primary"
          >
            Copy Url
          </p>
        )}

        <form
          onSubmit={(e) => {
            void searchImages(e);
          }}
        >
          <input
            type="text"
            className="my-5 w-full rounded border border-secondary px-3 py-2 outline-none"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search Images"
          />
        </form>
        <div className="flex flex-wrap p-4">
          {images.map((img) => (
            <div
              key={img._id}
              className="flex w-1/2 flex-col items-center gap-2 border p-1"
            >
              <Image
                src={img.url}
                alt=""
                className="flex-1 object-contain "
                width={200}
                height={200}
              />
              <p
                className="cursor-pointer p-2"
                onClick={() => {
                  void navigator.clipboard.writeText(img.url);
                }}
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
