export const convertFormData = (keyMain,common,dataForm) => {
  for (const [key, value] of Object.entries(common)) {
    // console.log(key,value)
    if(value && typeof value == 'object'){
      if(value instanceof File){
        if(keyMain != ''){
          dataForm.append(`${keyMain}[${key}]`, filterValue(value));
        }else{
          dataForm.append(`${key}`, filterValue(value));
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
          dataForm.append(`${keyMain}[${key}]`, filterValue(value));
        }else{
          dataForm.append(`${key}`, filterValue(value));
        }
      }else{
        if(keyMain != ''){
          dataForm = convertFormData(keyMain+'['+key+']',value,dataForm)
        }else{
          dataForm = convertFormData(`${key}`,value,dataForm)
        }
      }
    }else{
      if(keyMain != ''){
        dataForm.append(`${keyMain}[${key}]`, filterValue(value));
      }else{
        dataForm.append(`${key}`, filterValue(value));
      }
    }
  }
  return dataForm;
};