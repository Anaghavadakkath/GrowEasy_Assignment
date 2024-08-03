  import { Banner } from './types/Banner';
  import React, { useState, ChangeEvent, FormEvent } from 'react';
  interface EditBannerProps {
    banner: Banner;
    onSave: (banner: Banner) => void;
    onClose: () => void;
  }
  
  const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
    const [formData, setFormData] = useState<Banner>(banner);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSave(formData);
    };
  
    return (
        <div style={bottomSheetStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Description</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>CTA</label>
            <input type="text" name="cta" value={formData.cta} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Image</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Background</label>
            <input type="color" name="background" value={formData.background} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={buttonGroupStyle}>
            <button type="submit" style={saveButtonStyle}>Save</button>
            <button type="button" onClick={onClose} style={cancelButtonStyle}>Cancel</button>
          </div>
        </form>
      </div>
    );
  };
  const bottomSheetStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#fff',
    padding: '20px',
    boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
    borderRadius: '10px 10px 0 0',
  };
  
  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };
  
  const inputGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };
  
  const labelStyle: React.CSSProperties = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };
  
  const inputStyle: React.CSSProperties = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    width: '100%',
  };
  
  const buttonGroupStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };
  
  const saveButtonStyle: React.CSSProperties = {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    width: '48%',
  };
  
  const cancelButtonStyle: React.CSSProperties = {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    width: '48%',
  };
  
  
  export default EditBannerTemplateBs;
  

