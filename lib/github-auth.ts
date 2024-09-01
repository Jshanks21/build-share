import { Octokit } from "octokit";
import { createAppAuth } from "@octokit/auth-app";

const appId = process.env.NEXT_PUBLIC_GITHUB_APP_ID as string; // Your GitHub App ID
const privateKey = process.env.NEXT_PUBLIC_GITHUB_APP_PRIVATE_KEY as string; // Your GitHub App Private Key
const installationId = process.env.NEXT_PUBLIC_GITHUB_INSTALLATION_ID; // Installation ID for the GitHub App

export const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: appId!,
    privateKey: privateKey!,
    installationId: parseInt(installationId!, 10),
  },
});

