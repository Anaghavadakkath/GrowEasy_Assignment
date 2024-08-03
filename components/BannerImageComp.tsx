import React from 'react';

interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: (id: number) => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ id, title, description, cta, image, background, onEdit }) => {
  return (
    <div style={{ ...bannerStyle, background}}> 
      <div style={relativeContainerStyle}>
        <button style={editButtonTopRightStyle} onClick={() => onEdit(id)}>Edit</button>
        <img src={image} alt={title} style={imageStyle} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button style={buttonStyle} onClick={() => alert(`CTA clicked for ${title}`)}>{cta}</button>
        
        
      </div>
    </div>
  );
};

const bannerStyle: React.CSSProperties = {
  padding: '2px',
  margin: '10px',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const relativeContainerStyle: React.CSSProperties = {
  position: 'relative',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '5px',
  backgroundColor: 'orange',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
};

const editButtonTopRightStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  padding: '5px 10px',
  borderRadius: '5px',
  backgroundColor: '#f3b700',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
};
const defaultButtonStyle: React.CSSProperties = {
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '5px',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
};

const learnMoreButtonStyle: React.CSSProperties = {
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '5px',
  backgroundColor: 'orange',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  alignSelf: 'flex-end',
};



export default BannerImageComp;
