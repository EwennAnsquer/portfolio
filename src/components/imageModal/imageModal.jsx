import React, { useEffect,useState,useRef } from 'react';
import './ImageModal.css';

const ImageModal = ({ imageUrl, onClose }) => {
    const [activeZoom, setActiveZoom] = useState(false);
    const image = useRef(null);
    const imageContainer = useRef(null)
    let [zoom, setZoom] = useState(2);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
        document.body.style.overflow = 'auto';
        };
    }, []);

    // const zoomActive = () =>{
    //     setActiveZoom(true)
    // }

    // const zoomIn = (e) =>{
    //     console.log("zoomIn")
    //     let clientX = e.clientX - imageContainer.current.offsetLeft
    //     let clientY = e.clientY - imageContainer.current.offsetTop

    //     let mWidth = imageContainer.current.offsetWidth
    //     let mHeight = imageContainer.current.offsetHeight

    //     clientX = clientX / mWidth * 100
    //     clientY = clientY / mHeight * 100

    //     //console.log(clientX,clientY, image.current.style)

    //     image.current.style.transform='translate(-'+clientX+'%,-'+clientY+'%) scale('+zoom+')'
    // }

    // const zoomOut = () =>{
    //     console.log("zoomOut")
    //     image.current.style.transform='translate(0%,0%) scale(1)'
    // }

    // const scroll = (e) => {
    //     if (e.deltaY > 0) {
    //         setZoom(zoom-=0.5)
    //     } else if (e.deltaY < 0) {
    //         setZoom(zoom+=0.5)
    //     }
    //     console.log(zoom)
    // }

    return (
        <div className="image-modal-overlay">
        <span className="close-button" onClick={onClose}>
            &times;
        </span>
        <div className="image-modal-content" ref={imageContainer}>
            <img className="image-modal" src={imageUrl} alt="Modal" ref={image}/>
        </div>
        </div>
    );
};

export default ImageModal;
