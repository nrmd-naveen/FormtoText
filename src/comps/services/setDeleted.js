
export const setDeleted = (data) =>{
    const LSdelData = JSON.parse(localStorage.getItem("DeletedData"));
    let delData = localStorage.getItem("DeletedData") !== null ? LSdelData : [];
    delData.push(data);
    localStorage.setItem("DeletedData",JSON.stringify(delData));
    console.log("Data Deleted -- ", data)
}