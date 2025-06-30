self.onmessage = ({data}) => {
    const {product, allData, store} = data;
    const productData = allData.filter((item)=> {
        return item.product === product && item.store === store
    })
    const total = productData.reduce((total, item) => total + item.pcs, 0)
    self.postMessage({total})
}