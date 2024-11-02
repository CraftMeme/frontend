# Meme Token Launchpad

## Overview

The Meme Token Launchpad is a decentralized platform that enables users to create meme tokens effortlessly without needing to write code. With an intuitive user interface, the platform allows users to manage liquidity, set vesting schedules, and enforce multisignature governance for enhanced security. It leverages Next.js for the frontend, QuickNode Functions for blockchain integration, and supports token creation, liquidity provision, and transaction tracking.

## Features

- **Token Creation**: Easily create a meme token with a unique name, ticker, supply, and description
- **Liquidity Provision**: Manage token liquidity directly on the platform, with real-time updates on volume and transactions
- **Vesting Schedules**: Set up vesting schedules to distribute tokens over time
- **Multisig Governance**: Ensure secure governance using a multisignature contract
- **User-Friendly UI**: The platform's UI is built with Next.js, providing a seamless user experience

## Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, TypeScript
- **Blockchain Integration**: Solidity smart contracts (FactoryTokenContract, LiquidityManager, MultiSigContract, VestingContract)
- **APIs**: QuickNode, Pinata for IPFS storage
- **Libraries**: Chainlink VRF (for randomness), OpenZeppelin (smart contract standards)

## Getting Started

### Prerequisites

- Node.js (>= v14)
- Yarn or npm
- MetaMask or another Web3 wallet (for testing)
- Git

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
PINATA_JWT=your_pinata_jwt_token
NEXT_PUBLIC_GATEWAY_URL=your_ipfs_gateway_url
NEXT_PUBLIC_PROJECT_ID=your_project_id
NEXT_PUBLIC_QUICKNODE_API_KEY=your_quicknode_api_key
NEXT_PUBLIC_WEBHOOK_URL=your-webhook-url
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/meme-token-launchpad.git
cd meme-token-launchpad
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Build the project:

```bash
npm run build
```

4. Run the project locally:

```bash
npm run dev
```

The app should now be running on http://localhost:3000.

## Deployment

The project can be deployed to GitHub Pages. Ensure the GitHub Actions workflow file `.github/workflows/deploy.yml` is configured correctly. This workflow file handles building and deploying the Next.js site to GitHub Pages.

## Smart Contracts

The platform uses several smart contracts to manage different aspects of the launchpad:

- **FactoryTokenContract.sol**: Handles token creation and stores details like tokenName, tokenTicker, tokenSupply, and more
- **LiquidityManager.sol**: Manages liquidity functions such as adding and removing liquidity
- **MultiSigContract.sol**: Implements multisignature governance for secure transactions and management
- **VestingContract.sol**: Manages token vesting schedules for controlled distribution

## Data Display

The platform retrieves token data from the deployed smart contracts and displays it in a user-friendly card format. Data fields include:

- createdAt
- createdBy
- liquidity
- tokenDescription
- tokenName
- tokenSupply
- tokenFileUrl
- tokenTicker
- transactions
- volume

## API Reference

### QuickNode API

QuickNode provides blockchain data for transaction history, volume, and other relevant information. To use it, set your QuickNode API key in the `.env.local` file.

### Pinata API

Pinata is used for storing metadata and token images on IPFS. Ensure your Pinata JWT is set in the `.env.local` file.

## Usage

1. **Create a Token**: Fill out the form with details like name, ticker, supply, and description, then submit to create a new token
2. **Add Liquidity**: Manage token liquidity directly within the platform
3. **View Transactions**: Track the latest transactions and volume for each token
4. **Governance**: Approve or reject proposals through multisig voting for secure governance
5. **Set Vesting Schedule**: Schedule token distribution over a set period

## Future Improvements

To enhance the functionality of the memecoin launchpad, I would have implemented the following features with a focus on user engagement and real-time data insights. However, due to time constraints, I was unable to complete these implementations:

1. **Real-Time Transaction Monitoring**

   - **Feature**: I would utilize a streaming service to monitor transactions specifically related to newly created memecoins.
   - **Implementation**: By modifying the main function, I would filter and process transactions that involve memecoins, extracting essential information such as transaction hashes, sender and receiver addresses, and amounts.
   - **User Benefit**: This would allow users to receive real-time updates on transactions involving their memecoins, thereby enhancing transparency and engagement.

2. **Price Tracking**

   - **Feature**: I would implement a system to track the price movements of memecoins in real-time.
   - **Implementation**: By leveraging the streaming data, I would monitor specific events (like trades) that impact the price of memecoins. Integrating with decentralized exchanges (DEXs) would enable fetching of price data and updating users on significant price changes.
   - **User Benefit**: Users would receive alerts or notifications about notable price fluctuations, empowering them to make informed trading decisions.

3. **Token Creation Notifications**

   - **Feature**: I would set up a notification system to alert users when new memecoins are created.
   - **Implementation**: By modifying the filter function, I would listen for events indicating new token creation and send notifications to users interested in the latest memecoins.
   - **User Benefit**: This feature would keep users informed about new trading opportunities, allowing them to act quickly on emerging memecoins.

4. **Transaction History and Analytics**
   - **Feature**: I would develop a user-friendly dashboard that displays users' transaction history and analytics.
   - **Implementation**: Utilizing the data captured from the stream, I would create an interface that showcases transaction details, including amounts, timestamps, and statuses.
   - **User Benefit**: This would enable users to track their trading activities and analyze their performance over time, fostering a better understanding of their investment strategies.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes and commit them (`git commit -m 'Add new feature'`)
4. Push the changes to your branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.
