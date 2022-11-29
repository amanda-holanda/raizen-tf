export const filterData = (data, criteria, value) => 
    data.filter(obj => {
        return obj[criteria] === value
    });
