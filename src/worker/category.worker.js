self.onmessage = ({data}) => {
    const categories = data.map(item => item.category);
    const uniqueCategories = [...new Set(categories)]
    self.postMessage(uniqueCategories)
}