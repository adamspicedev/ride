import { buildDbUrl } from '@/lib/db'

export async function POST(req: Request) {
    const sql = buildDbUrl()
    try {
        const { firstName, lastName, email, clerkId } = await req.json()
        if (!firstName || !lastName || !email || !clerkId) {
            return Response.json(
                { error: 'Missing required fields' },
                { status: 400 },
            )
        }

        const name = `${firstName} ${lastName}`

        const response = await sql`
    INSERT INTO users (name, email, clerk_id)
    VALUES (${name}, ${email}, ${clerkId});
  `

        return Response.json(JSON.stringify({ data: response }), {
            status: 200,
        })
    } catch (error) {
        console.error('error', error)
        return Response.json({ error: error }, { status: 500 })
    }
}
