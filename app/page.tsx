// ============================================================================
// app/page.tsx   ← home page: a map of the API for students to try
// ============================================================================
// Plain page (no state). It just explains the endpoints this demo exposes so
// students can open them directly or test them in Thunder Client.
// ----------------------------------------------------------------------------

const endpoints = [
  ["GET", "/api/courses", "Read the whole list"],
  ["POST", "/api/courses", "Create one (JSON body: code, name)"],
  ["GET", "/api/courses/1", "Read one course by id"],
  ["PUT", "/api/courses/1", "Update one course (JSON body)"],
  ["DELETE", "/api/courses/1", "Delete one course"],
];

// Small colour map so each HTTP verb is easy to spot.
const verbColor: Record<string, string> = {
  GET: "bg-green-100 text-green-700",
  POST: "bg-blue-100 text-blue-700",
  PUT: "bg-amber-100 text-amber-700",
  DELETE: "bg-red-100 text-red-700",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">
        The backend lives inside this Next.js app
      </h2>
      <p className="mb-6 text-gray-500">
        Every row below is a real endpoint served from <code>app/api/…</code>.
        Open the <strong>Courses</strong> page to use them from the browser, or
        hit them directly with Thunder Client / curl.
      </p>

      <div className="space-y-2">
        {endpoints.map(([verb, path, desc]) => (
          <div
            key={verb + path}
            className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3"
          >
            <span
              className={`w-16 rounded px-2 py-1 text-center text-xs font-bold ${verbColor[verb]}`}
            >
              {verb}
            </span>
            <code className="text-sm text-gray-800">{path}</code>
            <span className="ml-auto text-xs text-gray-400">{desc}</span>
          </div>
        ))}
      </div>
    </main>
  );
}