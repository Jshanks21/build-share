"use client";

import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3Auth } from "@web3auth/modal";
import { useEffect, useState } from "react";
import RPC from "@/lib/ethersRPC";

const clientId = process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID as string;

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0xaa36a7",
  rpcTarget: "https://rpc.ankr.com/eth_sepolia",
  displayName: "Ethereum Sepolia Testnet",
  blockExplorerUrl: "https://sepolia.etherscan.io",
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
};

// SDK Initialization
const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

const web3auth = new Web3Auth({
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
});

export default function Login() {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        // SDK Initialization
        await web3auth.initModal();
        // SDK Initialization
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    // Login
    const web3authProvider = await web3auth.connect();
    // Login
    setProvider(web3authProvider);
    if (web3auth.connected) {
      setLoggedIn(true);
      console.log("logged in");
    }
  };

  const getUserInfo = async () => {
    // Get User Information
    const user = await web3auth.getUserInfo();
    // Get User Information
    console.log(user);
  };

  const logout = async () => {
    // Logout
    await web3auth.logout();
    // Logout
    setProvider(null);
    setLoggedIn(false);
    console.log("logged out");
  };

  // Check the RPC file for the implementation
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const address = await RPC.getAccounts(provider);
    console.log(address);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const balance = await RPC.getBalance(provider);
    console.log(balance);
  };

  const signMessage = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const signedMessage = await RPC.signMessage(provider);
    console.log(signedMessage);
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    console.log("Sending Transaction...");
    const transactionReceipt = await RPC.sendTransaction(provider);
    console.log(transactionReceipt);
  };

  const loggedInView = (
    <button onClick={logout}>
      Log Out
    </button>
  );

  const unloggedInView = (
    <button onClick={login}>
      Sign In
    </button>
  );

  return (
    <div>
      {loggedIn ? loggedInView : unloggedInView}
    </div>
  );
}