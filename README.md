# convert-form-data
This package can take any json object and convert it to FormData.

# Usage
    jsonToFormdata - 
        params: base_key, jsonObject, formDataObject
        Output: FormData
# Development Story
Previously we are using json to post the data to the server.
But, when, we wanted to upload many images with the post data;
it was not possible with json due to it's size limitation, so we had to use multi-part/form-data or FormData Object.

But when we needed to convert json to FormData Object, we had to assign value for every single key of json object, (dataForm.append(`${key}`, value) ) which is very time consuming. 

For practical ussage, we have built this converter, to convert very large json object to FormData object, just by calling a function.

Example :

```json
const json_object = {
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 30,
      "address": {
        "street": "123 Main Street",
        "city": "New York",
        "state": "NY",
        "country": "USA"
      },
      "phone": "555-1234",
      "profileImage": {
        "filename": "example.jpg",
        "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
      }
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "age": 25,
      "address": {
        "street": "456 Elm Street",
        "city": "Los Angeles",
        "state": "CA",
        "country": "USA"
      },
      "phone": "555-5678",
      "profileImage": {
        "filename": "example2.jpg",
        "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
      }
    }
     // Add more users here...
    // ...
    // ...
    // ...
  ]
}

import "jsonToFormdata" from "convert-form-data"
let dataForm = new FormData();
dataForm = jsonToFormdata("", json_object, dataForm);
```

converting to FormData is as simple as that.

