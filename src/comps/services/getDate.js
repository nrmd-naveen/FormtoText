
export const getDate = () => {
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0,10);
    // Format : yyyy-mm-dd
    //console.log("See Date : ", date)
    return date;
  }