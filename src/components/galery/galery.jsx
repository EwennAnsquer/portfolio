import React, { useState } from 'react';
import './Galery.css';
import ImageModal from '../imageModal/imageModal';

export default function Galery({ children }) {
  const [modalImageUrl, setModalImageUrl] = useState(null);

  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
  };

  const closeModal = () => {
    setModalImageUrl(null);
  };

  return (
    <div className='galery'>
      {React.Children.map(children, (child, index) => (
        <div key={index} onClick={() => openModal(child.props.src)}>
          {child}
        </div>
      ))}
      {modalImageUrl && <ImageModal imageUrl={modalImageUrl} onClose={closeModal} />}
    </div>
  );
}

