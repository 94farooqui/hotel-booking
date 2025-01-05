import React, { useState } from "react";
import { cld } from "./../../config/cloudinary";
import axios from "axios";

function ImageUpload({ hotelId,newPhoto, setNewPhoto }) {

  const serverAddress = "http://localhost:5000"
  const [image, setImage] = useState("");
  const [uploadProgress,setUploadProgress] = useState(0)

  const handleFileSelect = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("hotelImage", image);
    axios
      .post(`http://localhost:5000/api/upload/hotelImage/${hotelId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress : (ProgressEvent) => {
          setUploadProgress(Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total))
        }
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.path);
        setNewPhoto(`${serverAddress}/${response.data.path}`);
      });
  };
  return (
    <div className="w-full border rounded-lg mb-4">
      <form onSubmit={uploadImage} enctype="multipart/form-data" className="w-full p-4 flex justify-between items-center">
        <input id="upload-button" type="file" onChange={handleFileSelect} className="hidden" />
        <label htmlFor="upload-button" className="bg-gray-200 hover:bg-gray-700  hover:text-white px-4 py-2 rounded-lg transition">Browse</label>
        <button  type="submit" className="bg-gradient-to-br from-gray-950 to-gray-900 text-white px-4 py-2 rounded-lg">Upload</button>
      </form>
    </div>
  );
}
export default ImageUpload;
