import axios from "axios";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
let URL = "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"



const PhotoPost = (image) => {
    
    console.log(image.image);
    return (
        <div>
            <Link to={`/photo/${image.image.id}`}>
            <img src={image.image.urls.regular} />
            </Link>
            
            <div>
                <span>{image.image.user.username}</span> <img src={image.image.user.profile_image.medium}/>
            </div>
        </div>
    )
}



const FeedPhotos = () => {
    

    const [images, setImages] = useState("")
    useEffect(() => {
    
        axios.get(URL)
            .then(response => {
                setImages(response.data)
            } )
            .catch(error => {
                console.log(error)
            })

    }, [])
    
    console.log(images);
    return (
        <>
        {images ? images.map((image,id) => <PhotoPost key={id} image={image}/>): <div>Fetching data</div>}
        </>
    )
}


export default FeedPhotos;