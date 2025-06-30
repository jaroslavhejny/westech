self.onmessage = ({data}) => {
    const {allData, category, store} = data;
    const myItem = allData?.filter((item) => {
        return item.category === category && item.store === store
    })
    const total = myItem?.reduce((total, item) => total + item.pcs, 0)
    setTimeout(()=>{
        self.postMessage({total})
    }, Math.round((Math.random()*1000)+1000))

    // Math.round((Math.random()*1000)+1000) -> zdržení response workeru for fun
}