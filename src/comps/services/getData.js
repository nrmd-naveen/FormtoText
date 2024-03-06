

export const getData = (ID) =>{
    const LSdata = JSON.parse(localStorage.getItem(ID));
    return LSdata;
}