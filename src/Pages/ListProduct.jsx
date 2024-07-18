import React from 'react'

// Importing helper modules
import { useState } from "react";

// Importing core components
import QuillEditor from "react-quill";

// Importing styles
import "./editor.css";
import "react-quill/dist/quill.snow.css";

import { modules,formats } from '../utils/EditorModuleAndFormat';


function ListProduct() {

    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productNetWeight, setProductNetWeight] = useState("");
    const [productDescription, setProductDescription] = useState("");

    const [imageUrls, setImageUrls] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = (event) => {
            resolve(event.target.result);
          };

          reader.onerror = (err) => {
            reject(err);
          };

          reader.readAsDataURL(file);
        });
      })
    ).then((images) => {
      setImageUrls([...imageUrls, ...images]);
    });
  };


  return (
    <div className="listProduct">

        <div className="listProuctForm">
            <div className="productName">
                <p>Product Name</p>
                <input value = {productName} type= "text" onChange = {(e)=>{setProductName(e.target.value)}}/>
            </div>

            <div className="productCategory">
                <p>Category</p>
                <input value = {productCategory} type= "text" onChange = {(e)=>{setProductCategory(e.target.value)}}/>
            </div>

            <div className="productPrice">
                <p>Price</p>
                <input value = {productPrice} type= "text" onChange = {(e)=>{setProductPrice(e.target.value)}}/>
            </div>

            <div className="productNetWeight">
                <p>Net Weight</p>
                <input value = {productNetWeight} type= "text" onChange = {(e)=>{setProductNetWeight(e.target.value)}}/>
            </div>

            <div className="productDescription">
                <p>Description</p>
                <input value = {productDescription} type= "text" onChange = {(e)=>{setProductDescription(e.target.value)}}/>
                <QuillEditor
                  className= "editor"
                  formats={formats}
                  modules={modules}
                  theme="snow"
                  value={productDescription}
                  onChange={(value) => {(e)=>{setProductDescription(e.target.value)}}}
      />
            </div>

            <div  className="productImages">
      <h2>Multiple Image Upload</h2>
      <input type="file" onChange={handleFileChange} multiple />

      {imageUrls.length > 0 && (
        <div>
          <h3>Selected Images:</h3>
          <div className="image-preview">
            {imageUrls.map((url, index) => (
              <img key={index} src={url} alt={`Image ${index}`} style={{ maxWidth: '100px', marginRight: '10px' }} />
            ))}
          </div>
        </div>
      )}
    </div> 
        </div>
      
    </div>
  )
}

export default ListProduct
