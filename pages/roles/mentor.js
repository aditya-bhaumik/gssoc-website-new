import Link from 'next/link';

export default function MentorRegistration() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-orange-100 dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
          Coming Soon...
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Mentor registration page is under development. Stay tuned for updates!
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          For more information, visit the{' '}
          <Link href="https://gssoc.tech" className="text-orange-500 hover:underline">
            GSSoC website
          </Link>.
        </p>
      </div>
    </div>
  );
}

  