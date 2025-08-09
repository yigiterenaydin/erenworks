// Not used in the legacy flow
export async function POST() {
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}


