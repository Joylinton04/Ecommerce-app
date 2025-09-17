import React, { useState } from "react";
import { Input } from "../components/ui/input";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/Sidebar";
import { CloudUpload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Home = () => {
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [image3, setImage3] = useState<File | null>(null);
  const [image4, setImage4] = useState<File | null>(null);

  return (
    <div className="font-body">
      <Navbar />
      <div className="flex gap-6 p-4">
        {" "}
        {/* Added padding for better mobile view */}
        <Sidebar />
        <form className="flex-1 px-4 py-8 md:px-14 md:py-5">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Upload Image
          </h1>

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
                  alt=""
                  className="w-full absolute -z-10 h-full object-cover object-center"
                />
              )}
            </div>
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
                  alt=""
                  className="w-full absolute -z-10 h-full object-cover object-center"
                />
              )}
            </div>
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
                  alt=""
                  className="w-full absolute -z-10 h-full object-cover object-center"
                />
              )}
            </div>
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
                    PNG, JPG up to 10MB
                  </p>
                </div>
              )}
              {image1 && (
                <img
                  src={URL.createObjectURL(image1)}
                  alt=""
                  className="w-full absolute -z-10 h-full object-cover object-center"
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Product name</label>
            <Input type="" className="max-w-sm shadow-none h-10 rounded-none" />
          </div>
          <div className="flex flex-col gap-2 py-4">
            <label htmlFor="name">Product description</label>
            <Textarea
              className="max-w-sm shadow-none h-40 rounded-none"
              placeholder="Write content here"
            />
          </div>
          <div className="flex gap-6">
            <div className="space-y-2">
              <label htmlFor="Category">Category</label>
              <Select>
              <SelectTrigger className="w-[180px] shadow-none">
                <SelectValue placeholder="Men" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Men">Men</SelectItem>
                <SelectItem value="Women">Women</SelectItem>
                <SelectItem value="Kids">Kids</SelectItem>
              </SelectContent>
            </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="Category">Sub Category</label>
              <Select>
              <SelectTrigger className="w-[180px] shadow-none">
                <SelectValue placeholder="Top wear" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Men">Top wear</SelectItem>
                <SelectItem value="Women">Pants</SelectItem>
                <SelectItem value="Kids">T-shirt</SelectItem>
              </SelectContent>
            </Select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
