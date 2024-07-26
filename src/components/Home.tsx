import { useState } from "react";

interface Ethereum {
  request: (args: { method: string }) => Promise<string[]>;
}

declare global {
  interface Window {
    ethereum?: Ethereum;
  }
}

const Home = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");

  const connectWallet = async () => {
    console.log("connect wallet");

    try {
      if (!window.ethereum) return alert("Please install Wallet");

      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

      setWalletAddress(accounts[0]);
      console.log(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 w-full max-w-7xl">
        {/* Left Side of the web page */}
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Welcome to blockchain <br /> based gaming world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the potential of blockchain and crypto infused with gaming with our platform
          </p>
          {!walletAddress && (
            <button
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] w-[220px]"
              type="button"
              onClick={connectWallet}
            >
              <p className="text-white text-base font-semibold">Connect Wallet</p>
            </button>
          )}
          <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-[20px] md:ml-10">
            <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-96 w-full my-5 eth-card white-glassmorphism">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center"></div>
                  <div>
                    <p className="text-white font-light text-sm">
                      {walletAddress ? walletAddress : 'No Account Connected'}
                    </p>
                    <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
