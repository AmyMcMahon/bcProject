import React, { useState } from 'react';

const CreateWallet: React.FC = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [balance, setBalance] = useState('');

    const checkBalance = async () => {
        try {
            const web3 = new Web3();
            const balance = await web3.eth.getBalance(walletAddress);
            setBalance(web3.utils.fromWei(balance, 'ether'));
        } catch (error) {
            console.error('Error checking balance:', error);
        }
    };

    return (
        <div>
            <h1>Check Wallet Balance</h1>
            <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter wallet address"
            />
            <button onClick={checkBalance}>Check Balance</button>
            {balance && <p>Balance: {balance} ETH</p>}
        </div>
    );
};

export default CreateWallet;