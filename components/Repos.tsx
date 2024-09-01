'use client';

import { useEffect, useState } from 'react';
import { components } from "@octokit/openapi-types";

type Repository = components["schemas"]["repository"];

export const Repos = (): JSX.Element => {
  const [repos, setRepos] = useState<{
    total_count: number;
    repositories: Repository[];
    repository_selection?: string;
  } | null>(null);

  useEffect(() => {
    async function getRepos(): Promise<void> {
      try {
        const response = await fetch('/api/github-repos');     

        // Check that the response is ok (200)
        if (response.status !== 200) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const responseJson = await response.json();

        console.log(responseJson);
        setRepos(responseJson);

      } catch (error) {
        console.error("Error fetching repositories: ", error);
      }
    }

    getRepos();

  }, []);

  return (
    <div>
      {repos && repos.repositories
        .sort((a, b) => {
          return (new Date(b.updated_at ?? 0)).getTime() - (new Date(a.updated_at ?? 0)).getTime();
        })
        .slice(0, 10)
        .map((repo) => (
          <div key={repo.id}>
            <h1>{repo.name}</h1>
          </div>
        ))}
    </div>
  )
}

