#JSON-RPC Endpoints
#Interact directly with the Flashbots RPC endpoint
#Advanced users can interact with the RPC endpoint at relay.flashbots.net, or one of the testnet URLs below.

#Bundle Relay URLS
#Network	URL
#Mainnet	https://relay.flashbots.net
#Sepolia	https://relay-sepolia.flashbots.net
#The API provides JSON-RPC methods for interfacing with Flashbots. Below are some of the restrictions:

#There is a rate limit of 10,000 requests per second per IP
#Each bundle (txs parameter) can contain at most 100 transactions and have a size limit of 300,000 bytes
#Each method is documented below.

#eth_sendBundle
#eth_sendBundle can be used to send your bundles to the Flashbots builder. The eth_sendBundle RPC has the following payload format:

{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_sendBundle",
  "params": [
    {
      txs,               // Array[String], A list of signed transactions to execute in an atomic bundle
      blockNumber,       // String, a hex encoded block number for which this bundle is valid on
      minTimestamp,      // (Optional) Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch
      maxTimestamp,      // (Optional) Number, the maximum timestamp for which this bundle is valid, in seconds since the unix epoch
      revertingTxHashes, // (Optional) Array[String], A list of tx hashes that are allowed to revert
      replacementUuid,   // (Optional) String, UUID that can be used to cancel/replace this bundle
      builders,          // (Optional) Array[String], A list of [registered](https://github.com/flashbots/dowg/blob/main/builder-registrations.json) block builder names to share the bundle with
    }
  ]
}