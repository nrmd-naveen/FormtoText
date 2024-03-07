
const sortByDate = (data) => {
    const newData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    return newData;
}

export default sortByDate;