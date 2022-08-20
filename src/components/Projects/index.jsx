import React from "react"

export const Projects = () => {
  const projects = [
    {
      title: "Payment Gateway ADA Woocommerce Plugin",
      blockchain: "Cardano ADA",
      img: "",
    },
    {
      title: "Payment Gateway ONE Woocommerce Plugin",
      blockchain: "Harmony ONE",
      img: "",
    },
    {
      title: "Discord Bot for Cardano Stake Pools Stats Tracking",
      blockchain: "Cardano",
      img: "",
    },
    {
      title: "ETH NFT's Mint Dapp Wordpress Plugin",
      blockchain: "Ethereum",
      img: "",
    },
    {
      title: "ETH NFT's Mint Dapp Website",
      blockchain: "Ethereum",
      img: "",
    },
    {
      title: "Solana NFT's Mint Website",
      blockchain: "Ethereum",
      img: "",
    },
    {
      title: "BSC NFT's Mint Dapp Website",
      blockchain: "Binance Smart Chain",
      img: "",
    },
    {
      title: "Trading Bot for Bitso Alpha",
      blockchain: "In progress",
      img: "",
    },
    {
      title: "Solidity Smart Contract Development",
      blockchain: "ETH BSC Polygon",
      img: "",
    },
  ]

  return (
    <div className="projects-main__container">
      <h2 className="section-title">Latest Projects</h2>
      <div className="projects__container">
        {projects.map(project => {
          return (
            <div className="project__container" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.blockchain}</p>
              <img src={project.img} atl={project.title} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
