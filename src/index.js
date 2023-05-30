const filterValue = (value) => {
  value = (value == 'true' || value === true) ? 1 : value;
  value = (value == 'false' || value === false) ? 0 : value;
  value = (value == null || Number.isNaN(value) || value == 'null') ? '' : value;
  return value;
}

export const jsonToFormdata = (keyMain,common,formData) => {
  for (const [key, value] of Object.entries(common)) {
    // console.log(key,value)
    if(value && typeof value == 'object'){
      if(value instanceof File){
        if(keyMain != ''){
          formData.append(`${keyMain}[${key}]`, filterValue(value));
        }else{
          formData.append(`${key}`, filterValue(value));
        }
      }
      else if(value && value.getMonth !== "undefined" && typeof value.getMonth === 'function')
      {
        // handle date objects
        // if(value == null)
        // {
        //   console.log('null in object')
        // }
        if(keyMain != ''){
          formData.append(`${keyMain}[${key}]`, filterValue(value));
        }else{
          formData.append(`${key}`, filterValue(value));
        }
      }else{
        if(keyMain != ''){
          formData = jsonToFormdata(keyMain+'['+key+']',value,formData)
        }else{
          formData = jsonToFormdata(`${key}`,value,formData)
        }
      }
    }else{
      if(keyMain != ''){
        formData.append(`${keyMain}[${key}]`, filterValue(value));
      }else{
        formData.append(`${key}`, filterValue(value));
      }
    }
  }
  return formData;
};