export const filterByCriteriaValue = (list, criteria, value) => {
  
    return list.filter(obj => {
      return obj[criteria] === value
    })
  }
  