import { useState } from "react";
import { useRouter } from "next/router";

export default function CommonRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    country: "",
    city: "",
    state: "",
    college: "",
    year: "",
    email: "",
    contact: "",
    linkedIn: "",
    github: "",
    discord: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const selectedRole = router.query.role;
      router.push(`/roles/${selectedRole}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
    <form
      className="bg-orange-100 dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-2xl w-full mb-8"
      onSubmit={handleNextClick}
    >
      <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">
        Register for GSSoC '24 Extended
      </h1>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
  
        {/* Last Name */}
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
  
        {/* Gender */}
        <div className="col-span-2">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          >
            <option value="" disabled hidden>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>
  
        {/* Country */}
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>
  
        {/* City */}
        <div>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
  
        {/* State */}
        <div>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
        </div>
  
        {/* College */}
        <div>
          <input
            type="text"
            name="college"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.college && <p className="text-red-500 text-sm">{errors.college}</p>}
        </div>
  
        {/* Year */}
        <div>
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
        </div>
  
        {/* Email */}
        <div className="col-span-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
  
        {/* Contact */}
        <div className="col-span-2">
          <input
            type="tel"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
        </div>
  
        {/* LinkedIn URL */}
        <div className="col-span-2">
          <input
            type="url"
            name="linkedIn"
            placeholder="LinkedIn URL"
            value={formData.linkedIn}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.linkedIn && <p className="text-red-500 text-sm">{errors.linkedIn}</p>}
        </div>
  
        {/* GitHub URL */}
        <div className="col-span-2">
          <input
            type="url"
            name="github"
            placeholder="GitHub URL"
            value={formData.github}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.github && <p className="text-red-500 text-sm">{errors.github}</p>}
        </div>
  
        {/* Discord Tag */}
        <div className="col-span-2">
          <input
            type="text"
            name="discord"
            placeholder="Discord Tag"
            value={formData.discord}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            required
          />
          {errors.discord && <p className="text-red-500 text-sm">{errors.discord}</p>}
        </div>
      </div>
  
      {/* Next Button */}
      <button
        type="submit"
        className="mt-6 w-full bg-orange-500 dark:bg-orange-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700"
      >
        Next
      </button>
    </form>
  </div>
  
  );
}
