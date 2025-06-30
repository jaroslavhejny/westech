self.onmessage = ({data}) => {
    const {category, allData} = data;
    const allProducts = allData.filter((product) => {
        return product.category === category
    }).map(oneProduct => oneProduct['product']);
    const uniqueProducts = [...new Set(allProducts)];
    self.postMessage({uniqueProducts})
}