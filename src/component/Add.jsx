
import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
  const [name, setName]=useState('');
  const [brand, setBrand]= useState('');
  const [price, setPrice]=useState('');
  const [qty, setQty]= useState('')
  const [color, setColor]= useState('')
  const [description, setDescription]= useState('')
  const [selectedFile, setSelectedFile] = useState('');

 
const navigate = useNavigate()
      const submitForm = () => {

    const formData = new FormData()
    formData.append("name", name)
    formData.append("brand",brand)
    formData.append("price",price)
    formData.append("qty",qty)
    formData.append("color",color)
    formData.append("description",description)
    formData.append("file",selectedFile)
    
    
   let result = axios
      .post('http://localhost:8000/api/product/add',formData)
      // .then((res) => {
      //   console.log("??????", res)
      
      // })
      // .catch((err) => alert("File Upload Error"));
      console.log(result)
  };
  

  return (
    <div>
      <form onClick={submitForm}>
      <input
      placeholder='name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        placeholder='brand'
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
        placeholder='price'
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
        placeholder='qty'
          type="text"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
         <input
        placeholder='color'
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
         <input
        placeholder='description'
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <input type="file"  
          onChange={(event) => handlePicture(event)}  /> */}
           <input onChange={(event) => setSelectedFile(event)} accept="image/*" id="contained-button-file" multiple type="file" />
          <button type='submit'>Submit</button>


          <button onClick={()=>navigate("/")}>move to main page</button>
      </form>
    </div>
  )
}

export default AddProduct;

