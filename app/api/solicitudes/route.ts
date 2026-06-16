import { NextResponse } from "next/server"

type SolicitudPayload = {
  fecha?: string
  nombre?: string
  dni?: string
  direccion?: string
  telefono?: string
}

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL

  if (!scriptUrl) {
    return NextResponse.json(
      { error: "GOOGLE_SHEETS_SCRIPT_URL no esta configurada." },
      { status: 500 },
    )
  }

  const payload = (await request.json()) as SolicitudPayload

  if (!payload.nombre || !payload.dni || !payload.direccion || !payload.telefono) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 },
    )
  }

  const response = await fetch(scriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      ...payload,
      fecha: payload.fecha || new Date().toLocaleString("es-AR"),
    }),
  })

  const resultText = await response.text()
  let result: { status?: string; message?: string } = {}

  try {
    result = JSON.parse(resultText)
  } catch {
    result = {}
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: "No se pudo registrar la solicitud." },
      { status: 502 },
    )
  }

  if (result.status === "error") {
    return NextResponse.json(
      { error: result.message || "Google Sheets rechazo la solicitud." },
      { status: 502 },
    )
  }

  return NextResponse.json({ status: "success" })
}
