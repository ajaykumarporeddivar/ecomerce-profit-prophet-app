import { Response } from 'next';
import { PRODUCTS, STATS } from '@/lib/data';

export async function GET(): Promise<Response> {
  return new Response(
    JSON.stringify({
      ok: true,
      data: { products: PRODUCTS, stats: STATS },
    }),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function POST({ request }: any): Promise<Response> {
  const jsonData = await request.json();
  console.log('Received JSON data:', jsonData);
  return new Response(
    JSON.stringify({
      ok: true,
      message: 'Demo mode — data not persisted',
    }),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
  );
}