self.onmessage = ({data}) => {
    const stores = data.map(item => item.store)
    const uniqueStores = [...new Set(stores)]
    self.postMessage(uniqueStores)
}