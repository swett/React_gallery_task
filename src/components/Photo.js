import {useState, useEffect} from "react"
import axios from "axios"




const Photo = ({match}) => {
    const params = match.params;
    const [image, setImage] = useState("");
    let URL = `https://api.unsplash.com/photos/${params.id}/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`
    useEffect(()=> {
            axios.get(URL)
                .then(response => {
                    setImage(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
    },[URL])
    console.log(image);
    return (
        <div>
            {image ? <img src={image.urls.regular} alt="img"/> : <div>Fetching data...</div>}
            
        </div>
    )
}


export default Photo