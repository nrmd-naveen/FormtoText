
export const setData = (ID, inputData) =>{
    const LSdata = JSON.parse(localStorage.getItem(ID));
    let Data = localStorage.getItem(ID) !== null ? LSdata : [];
    Data.push(inputData);
    localStorage.setItem(ID,JSON.stringify(Data));
    console.log("Updated --------");
}