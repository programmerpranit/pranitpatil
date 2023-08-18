import { toast } from "react-toastify";

export const handleApiError = (err) => {
  toast.error("Unknown Error Occured");
  console.log(err);
};
