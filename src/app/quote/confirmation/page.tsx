// src/app/quote/confirmation/page.tsx
export default function ConfirmationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Quote Request Confirmed
        </h1>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300">
          Thank you! Your quote request has been submitted successfully. We will get back to you soon.
        </p>
        <div className="mt-6 text-center">
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Return to Home
          </a>
        </div>
      </main>
    </div>
  );
}