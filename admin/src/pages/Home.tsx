import React, { useState, type FormEvent } from "react";
import { Input } from "../components/ui/input";
import { CloudUpload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const Home = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [image3, setImage3] = useState<File | null>(null);
  const [image4, setImage4] = useState<File | null>(null);

  const [productName, setProductName] = useState<string>();
  const [desc, setDesc] = useState<string>();

  const handleAddToProduct = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    if (productName) formData.append("productName", productName);
    if (desc) formData.append("desc", desc);
    if (selectedSize) formData.append("selectedSize", selectedSize);
    if (category) formData.append("category", category);
    if (subCategory) formData.append("subCategory", subCategory);
    if (price !== undefined) formData.append("price", price.toString());

    if (image1) formData.append("image1", image1);
    if (image2) formData.append("image2", image2);
    if (image3) formData.append("image3", image3);
    if (image4) formData.append("image4", image4);

    // Properly log formData contents
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    toast("Product added to database")
  };

  return (
    // change to shadcn form later
    <form
      className="flex-1 px-4 py-8 md:px-14 md:py-5"
      onSubmit={handleAddToProduct}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Upload Image
      </h1>

      {/* Upload Section (only image1 shown here, repeat for others) */}
      <div className="py-4 flex items-center gap-4">
        <div
          className={`w-40 h-40 rounded-xl relative flex flex-col justify-center items-center group transition-colors duration-200 hover:border-blue-500 p-1 ${
            !image1 && "border-dashed border-2 border-gray-300"
          }`}
        >
          <Input
            type="file"
            className="h-full w-full absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setImage1(file);
            }}
          />
          {!image1 && (
            <div className="flex flex-col items-center text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
              <CloudUpload size={38} className="mb-2" />
              <p className="text-xs font-medium text-center">
                Drag and drop an image or{" "}
                <span className="text-blue-500 font-semibold">
                  click to upload
                </span>
              </p>
              <p className="text-[10px] mt-1 text-gray-400 text-center">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          )}
          {image1 && (
            <img
              src={URL.createObjectURL(image1)}
              alt="preview"
              className="w-full absolute -z-10 h-full object-cover object-center"
            />
          )}
        </div>
        <div
          className={`w-40 h-40 rounded-xl relative flex flex-col justify-center items-center group transition-colors duration-200 hover:border-blue-500 p-1 ${
            !image2 && "border-dashed border-2 border-gray-300"
          }`}
        >
          <Input
            type="file"
            className="h-full w-full absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setImage2(file);
            }}
          />
          {!image2 && (
            <div className="flex flex-col items-center text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
              <CloudUpload size={38} className="mb-2" />
              <p className="text-xs font-medium text-center">
                Drag and drop an image or{" "}
                <span className="text-blue-500 font-semibold">
                  click to upload
                </span>
              </p>
              <p className="text-[10px] mt-1 text-gray-400 text-center">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          )}
          {image2 && (
            <img
              src={URL.createObjectURL(image2)}
              alt="preview"
              className="w-full absolute -z-10 h-full object-cover object-center"
            />
          )}
        </div>
        <div
          className={`w-40 h-40 rounded-xl relative flex flex-col justify-center items-center group transition-colors duration-200 hover:border-blue-500 p-1 ${
            !image3 && "border-dashed border-2 border-gray-300"
          }`}
        >
          <Input
            type="file"
            className="h-full w-full absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setImage3(file);
            }}
          />
          {!image3 && (
            <div className="flex flex-col items-center text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
              <CloudUpload size={38} className="mb-2" />
              <p className="text-xs font-medium text-center">
                Drag and drop an image or{" "}
                <span className="text-blue-500 font-semibold">
                  click to upload
                </span>
              </p>
              <p className="text-[10px] mt-1 text-gray-400 text-center">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          )}
          {image3 && (
            <img
              src={URL.createObjectURL(image3)}
              alt="preview"
              className="w-full absolute -z-10 h-full object-cover object-center"
            />
          )}
        </div>
        <div
          className={`w-40 h-40 rounded-xl relative flex flex-col justify-center items-center group transition-colors duration-200 hover:border-blue-500 p-1 ${
            !image4 && "border-dashed border-2 border-gray-300"
          }`}
        >
          <Input
            type="file"
            className="h-full w-full absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setImage4(file);
            }}
          />
          {!image4 && (
            <div className="flex flex-col items-center text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
              <CloudUpload size={38} className="mb-2" />
              <p className="text-xs font-medium text-center">
                Drag and drop an image or{" "}
                <span className="text-blue-500 font-semibold">
                  click to upload
                </span>
              </p>
              <p className="text-[10px] mt-1 text-gray-400 text-center">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          )}
          {image4 && (
            <img
              src={URL.createObjectURL(image4)}
              alt="preview"
              className="w-full absolute -z-10 h-full object-cover object-center"
            />
          )}
        </div>
      </div>

      {/* Product Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Product name</label>
        <Input
          type="text"
          className="max-w-sm shadow-none h-10 rounded-none"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      {/* Product Description */}
      <div className="flex flex-col gap-2 py-4">
        <label htmlFor="desc">Product description</label>
        <Textarea
          className="max-w-sm shadow-none h-40 rounded-none"
          placeholder="Write content here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      {/* Category + SubCategory + Price */}
      <div className="flex gap-6">
        <div className="space-y-2">
          <label>Category</label>
          <Select value={category} onValueChange={(value) => setCategory(value)}>
            <SelectTrigger className="w-[180px] shadow-none">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Men">Men</SelectItem>
              <SelectItem value="Women">Women</SelectItem>
              <SelectItem value="Kids">Kids</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label>Sub Category</label>
          <Select
            value={subCategory}
            onValueChange={(v) => setSubCategory(v)}
          >
            <SelectTrigger className="w-[180px] shadow-none">
              <SelectValue placeholder="Select Sub Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Top wear">Top wear</SelectItem>
              <SelectItem value="Pants">Pants</SelectItem>
              <SelectItem value="T-shirt">T-shirt</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label>Product price</label>
          <Input
            type="number"
            placeholder="0"
            value={price ?? ""}
            onChange={(e) =>
              setPrice(
                e.target.value === "" ? undefined : Number(e.target.value)
              )
            }
          />
        </div>
      </div>

      {/* Sizes */}
      <div className="py-3">
        <h2>Product sizes</h2>
        <div className="flex gap-2 py-2">
          {sizes.map((s, i) => (
            <button
              key={i}
              onClick={() => setSelectedSize(s)}
              className={`w-[61px] h-[61px] rounded-lg grid place-content-center text-sm font-medium 
              transition-all duration-200 border ${
                selectedSize === s
                  ? "border-orange-500 bg-orange-50 text-orange-600"
                  : "border-gray-200 bg-[#FBFBFB] hover:border-orange-400"
              }`}
              type="button"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="inline-flex items-center gap-2">
        <Checkbox id="bestseller" />
        <label htmlFor="bestseller" className="block">
          Add to bestseller
        </label>
      </div>

      <div className="py-2">
        <Button type="submit">ADD</Button>
      </div>
    </form>
  );
};

export default Home;
