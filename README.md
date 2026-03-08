# TitanBuilder{
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