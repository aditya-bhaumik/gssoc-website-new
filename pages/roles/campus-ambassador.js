import { useState } from "react";

export default function CampusAmbassador() {
  const [formData, setFormData] = useState({
    experience: "",
    reason: "",
    referralCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-orange-100 dark:bg-black p-8 rounded-lg shadow-md max-w-xl w-full space-y-6 mb-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">
          Campus Ambassador Application
        </h1>

        <div className="space-y-4">
          {/* Experience Input */}
          <div>
            <label className="block text-left text-gray-700 dark:text-gray-200 font-semibold mb-2">
              Do you have previous experience of being a Campus Ambassador?
              <span className="text-red-500"> (required)</span>
            </label>
            <textarea
              name="experience"
              placeholder="Share your experience briefly"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            ></textarea>
          </div>

          {/* Reason Input */}
          <div>
            <label className="block text-left text-gray-700 dark:text-gray-200 font-semibold mb-2">
              Why do you wish to become a Campus Ambassador for GSSoC?
              <span className="text-red-500"> (required)</span>
            </label>
            <textarea
              name="reason"
              placeholder="Please share your reason..."
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full h-32 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            ></textarea>
          </div>

          {/* Referral Code Input */}
          <div>
            <label className="block text-left text-gray-700 dark:text-gray-200 font-semibold mb-2">
              Referral Code (optional)
            </label>
            <input
              type="text"
              name="referralCode"
              placeholder="Enter referral code (if any)"
              value={formData.referralCode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 dark:bg-orange-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
