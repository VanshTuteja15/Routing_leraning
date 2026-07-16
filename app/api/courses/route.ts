import { NextResponse } from 'next/server'
import { type Course,  courses } from '@/data/courses'

export async function GET() {
  return NextResponse.json(courses)
}

// The code is coming from the body and what is the body, the body is a JSON object that is sent by the client. The client sends a POST request to the server with a JSON object in the body that contains the code and name of the course. The server then parses the JSON object and creates a new course with the provided code and name. The server then adds the new course to the courses array and returns a JSON response with the new course and a status code of 201 (Created).

export async function POST(request: Request) {
  const body: Course = await request.json()
  if(!body.code || !body.name) {
    return NextResponse.json(
      { error: 'Missing code or name' }, 
      { status: 400 })
  }
  
  // Builing the new course. The server makes the id (clients dont choose ids)

  const newCourse: Course = {
    id: crypto.randomUUID(),
    code: body.code, 
    name: body.name,
    credits:  3, // default to 3 if not provided
    instructor: 'TBD' // default to TBD if not provided
  }
  courses.push(newCourse)
  return NextResponse.json(newCourse, { status: 201 })
}