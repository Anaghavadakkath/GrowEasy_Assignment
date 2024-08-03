import { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import bannersData from '../data/banners.json';

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const Home = () => {
  const [banners, setBanners] = useState<Banner[]>(bannersData);
  const [currentBanner, setCurrentBanner] = useState<Banner | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id: number) => {
    const banner = banners.find(b => b.id === id);
    if (banner) {
      setCurrentBanner(banner);
      setIsEditing(true);
    }
  };

  const handleSave = (updatedBanner: Banner) => {
    const updatedBanners = banners.map(b => (b.id === updatedBanner.id ? updatedBanner : b));
    setBanners(updatedBanners);
    setIsEditing(false);
  };

  return (
    <div style={gridContainerStyle}>
      {banners.map(banner => (
        <BannerImageComp key={banner.id} {...banner} onEdit={handleEdit} />
      ))}
      {isEditing && currentBanner && (
        <EditBannerTemplateBs banner={currentBanner} onSave={handleSave} onClose={() => setIsEditing(false)} />
      )}
    </div>
  );
};

const gridContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
  padding: '20px',
};

export default Home;


