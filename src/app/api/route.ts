import { NextResponse } from "next/server";

const tarefas = ["correr", "estudar", "tomar banho"];

export async function GET(request: Request) {
  return NextResponse.json(tarefas);
}

export async function POST(request: Request) {
  const data = await request.json();

  tarefas.push(data.tarefa);
  return NextResponse.json(tarefas);
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const index = searchParams.get("index");
  const data = await request.json();

  tarefas[Number(index)] = data.tarefa;

  return NextResponse.json({ message: "Put atualizado" });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const index = searchParams.get("index");
 

  tarefas.splice(Number(index), 1);

  return NextResponse.json({ message: "Delete Realizado" });
}
