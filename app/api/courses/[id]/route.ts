import {NextResponse} from "next/server";
import {courses} from "@/data/courses";

type conetxt = {params: Promise<{id: string}>};

export async function GET(request: Request, {params}: conetxt)
{
    const {id} = await params;
    const course = courses.find(c => c.id === id);

    if(!course) {
        return NextResponse.json({error: "Course not found"}, {status: 404});
    }   
    return NextResponse.json(course);
}

export async function PUT(request: Request, {params}: conetxt)
{
    const {id} = await params;
    const index = courses.findIndex(c => c.id === id);     
    if (index === -1) {
        return NextResponse.json({error: "Course not found"}, {status: 404});
    }

    const body = await request.json();
    courses[index] = {...courses[index], ...body};
    return NextResponse.json(courses[index]);
}

// Delete one Item: Delete/api/courses/:id

export async function DELETE(request: Request, {params}: conetxt){
    const {id} = await params;
    const index = courses.findIndex(c => c.id === id);
    if (index === -1) {
        return NextResponse.json({error: "Course not found"}, {status: 404});
    }   
    courses.splice(index, 1);
    return NextResponse.json({message: "Course deleted"});
}