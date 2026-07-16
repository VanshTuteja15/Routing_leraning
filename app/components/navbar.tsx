// ============================================================================
// components/Navbar.tsx   ← top bar, shown on every page
// ============================================================================
// Its own component file (course convention), imported by layout.tsx.
// ----------------------------------------------------------------------------

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-900">Courses API</h1>
          <p className="text-xs text-gray-400">CPRG 306 · Week 8 · API Routes</p>
        </div>
        <nav className="flex items-center gap-5 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/courses" className="hover:text-blue-600">
            Courses
          </Link>
        </nav>
      </div>
    </header>
  );
}