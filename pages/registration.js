import { useState } from "react";
import { useRouter } from "next/router";

export default function Registration() {
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleNextClick = () => {
    if (role) {
      // Navigate to a common page with the role passed as a query parameter
      router.push(`/common-page?role=${role}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <div className="relative w-full max-w-4xl bg-orange-100 dark:bg-black p-8 rounded-lg shadow-md overflow-hidden">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-orange-600 dark:text-orange-400">
              REGISTER
            </h1>
          </div>

          <div className="mb-6">
            <label className="block text-left text-gray-700 dark:text-gray-300 font-semibold mb-2">
              CHOOSE YOUR PREFERRED ROLE{" "}
              <span className="text-red-500">(required)</span>
            </label>
            <div className="relative">
              <select
                className="dropdown w-full px-3 py-2 border border-orange-600 dark:border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 appearance-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  Which role do you wish to apply for?
                </option>
                <option value="campus-ambassador">Campus Ambassador</option>
                <option value="project-admin">Project Admin</option>
                <option value="mentor">Mentor</option>
                <option value="contributor">Contributor</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={handleNextClick}
            className="w-full bg-orange-500 dark:bg-orange-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700"
          >
            NEXT
          </button>
        </div>
      </main>
    </div>
  );
}