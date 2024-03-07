
export const getDownloadData = (data,from,to) => {
    if(data == null){
        return null;
    }
    const newData = data.filter(el =>{
        if(new Date(el.date).getTime() >= new Date(from).getTime() && new Date(el.date).getTime() <= new Date(to).getTime() ){
            return el;
        }
    })
    console.log("gt - ",newData);
  return newData[0] !== undefined ? newData : null;
}
