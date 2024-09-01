import { NextResponse } from 'next/server';
import { appOctokit } from '@/lib/github-auth';

export async function GET() {
  try {
    const response = await appOctokit.request('GET /installation/repositories', {
      per_page: 100,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    // Check that the response is ok (200)
    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching repositories: ", error);
    return NextResponse.json({ error: 'Failed to fetch repositories' }, { status: 500 });
  }
}