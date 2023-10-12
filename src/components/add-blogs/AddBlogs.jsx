"use client";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const AddBlogs = () => {
  const [category, setCategory] = React.useState("");
  const handleAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.content.value;
    const img = form.photo.value;
    const newBlog = { title, description, img };
    fetch(`/api/addpost?id=${category}`, {
      method: "POST",
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your blog has been added",
          showConfirmButton: false,
          timer: 500,
        });
      });
  };

  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    fetch("/api/getcategory")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
console.log(categories)
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <main className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Add Blog
                </h1>
              </div>
              <div className="mt-5">
                {/* Form */}
                <form onSubmit={handleAddBlog}>
                  <div className="grid gap-y-4">
                    {/* Form Group */}
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Title
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="text"
                          name="title"
                          className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                          required=""
                          aria-describedby="email-error"
                        />
                        <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="content"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Description
                      </label>
                      <div className="relative">
                        <textarea
                          type="text"
                          id="content"
                          name="content"
                          className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                          required=""
                          aria-describedby="content-error"
                        />
                        <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* End Form Group */}
                    {/* Form Group */}
                    <div>
                      <label
                        htmlFor="photo"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Photo URL
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="photo"
                          name="photo"
                          className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                          required=""
                          aria-describedby="photo-error"
                        />
                      </div>
                    </div>
                    {/* End Form Group */}

                    <div>
                      <label
                        htmlFor="hs-inline-leading-select-label"
                        className="block text-sm font-medium mb-2 dark:text-white"
                      >
                        Category
                      </label>
                      <div className="inset-y-0 left-0 flex items-center text-gray-500 pl-px">
                        <label
                          htmlFor="hs-inline-leading-select-country"
                          className="sr-only"
                        >
                          Subject
                        </label>
                        <select
                          id="hs-inline-leading-select-country"
                          name="category"
                          onChange={(e) => setCategory(e.target.value)}
                          className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        >
                          {categories &&
                            categories?.data?.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.category}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    {/* Checkbox */}

                    {/* End Checkbox */}
                    <button
                      type="submit"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Add Blog
                    </button>
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddBlogs;
