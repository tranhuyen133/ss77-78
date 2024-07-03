import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../config/firebase";
import axios from "axios";

export default function UploadImage() {
  const [image, setImage] = useState<any>("");
  const [name, setName] = useState<string>("");
  const [imageUpload, setImageUpload] = useState<any>(null);
  const uploadImage = () => {
    const imageRef = ref(storage, `${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        const product = {
          name: name,
          image: url,
        };
        axios.post(`http://localhost:8080/products`, product);
      });
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let imageValue: any = e.target.files?.[0];
    console.log(imageValue);
    setImage(imageValue);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <h1>Thêm sản phẩm</h1>
      <input type="text" onChange={handleChangeName} />
      <br />
      <input type="file" onChange={handleChange} />
      <br />
      <button onClick={uploadImage}>Thêm sản phẩm</button>
    </>
  );
}
