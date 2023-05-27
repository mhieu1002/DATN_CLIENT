import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "crpczei6");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtvgddjmz/image/upload",
        formData
      );
      const imageUrl = response.data.secure_url;
      setImageUrl(imageUrl);

      // Cập nhật giá trị của input file
      event.target.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log(date);
  };

  const handleContentChange = (value) => {
    setContent(value);
    console.log(content);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      [{ align: [] }],
      ["blockquote", "code-block"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "blockquote",
    "code-block",
    "align",
    "color",
    "background",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const post = {
      title,
      content,
      category,
      date,
      imageUrl: imageUrl || "",
    };

    console.log(post);

    try {
      await axios.post("http://localhost:8000/posts", post);
      toast.success("Tạo bài viết thành công", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTitle("");
      setCategory("");
      setDate("");
      setContent("");
      setImageUrl("");
    } catch (error) {
      console.error(error);
      toast.error("Đã xảy ra lỗi khi tạo bài viết", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div style={{ marginTop: "3rem" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "4rem",
        }}
      >
        Bài viết
      </h1>
      <form
        style={{ width: "100%", padding: "3rem 30rem" }}
        onSubmit={handleSubmit}
      >
        <input
          style={{
            border: "1px solid #000",
            borderRadius: "1rem",
            width: "100%",
            padding: "1.3rem 2rem",
            fontSize: "1.5rem",
            marginBottom: "3rem",
          }}
          type="title"
          placeholder="Tiêu đề bài viết"
          value={title}
          onChange={handleTitleChange}
        />
        <select
          style={{
            border: "1px solid #000",
            borderRadius: "1rem",
            width: "100%",
            padding: "1.3rem 2rem",
            fontSize: "1.5rem",
            marginBottom: "3rem",
          }}
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Loại bài viết</option>
          <option value="Thông báo">Thông báo</option>
          <option value="Tin tức - sự kiện">Tin tức - sự kiện</option>
        </select>
        <input
          style={{
            border: "1px solid #000",
            borderRadius: "1rem",
            width: "100%",
            padding: "1.3rem 2rem",
            fontSize: "1.5rem",
            marginBottom: "3rem",
          }}
          type="datetime-local"
          value={date}
          onChange={handleDateChange}
        />
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          modules={modules}
          formats={formats}
        />
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <label
            className="hover2"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "240px",
              border: "2px dashed gray",
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "4px",
            }}
            htmlFor="dropzone-file"
          >
            {imageUrl === "" ? (
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px 0 6px 0",
                }}
              >
                <p>
                  <span
                    style={{
                      color: "#999",
                      fontSize: "1.8rem",
                      fontWeight: "700",
                    }}
                  >
                    Bấm vào để thêm hình ảnh
                  </span>
                </p>
              </div>
            ) : (
              <img
                src={imageUrl}
                alt="test"
                style={{ width: "auto", height: "auto", objectFit: "cover" }}
              />
            )}
            <input
              onChange={handleImageUpload}
              type="file"
              style={{
                width: "56%",
                height: "20%",
                position: "absolute",
                opacity: "0",
                cursor: "pointer",
              }}
            />
          </label>
        </div>
        <button
          className="hover"
          style={{
            display: "block",
            margin: "2rem auto",
            padding: "1.3rem 2rem",
            fontSize: "1.5rem",
            borderRadius: "1rem",
            backgroundColor: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
          type="submit"
        >
          Tạo bài viết
        </button>
      </form>
      <ToastContainer style={{ fontSize: "1.3rem" }} />
    </div>
  );
};

export default Write;
