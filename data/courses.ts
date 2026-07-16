// ============================================================================
// data/courses.ts   →   our pretend "database" (just an array in memory)
// ============================================================================
//
// A real backend saves data in a database (that's the Supabase weeks). For now
// we keep a simple ARRAY so we can focus on the API itself.
//
// Both route files import THIS SAME array, so a course added by POST in one
// file is visible to GET in the other.
//
// Note: this list resets every time the dev server restarts — that's expected,
// and it's exactly why we move to a real database later.
// ----------------------------------------------------------------------------

export type Course = {
    id: string;
    code: string;
    name: string;
    credits: number;
    instructor: string;
}

export const courses: Course[] = [
  { id: "1", code: "CPRG 306", name: "Web Development 2", credits: 3, instructor: "M. Al-Haifi" },
  { id: "2", code: "DMIT 1508", name: "Database Fundamentals", credits: 3, instructor: "J. Smith" },
  { id: "3", code: "CPRG 213", name: "Web Development 1", credits: 3, instructor: "A. Lee" },
];