import banner1 from '../../assets/banners/1.jpg'
import banner2 from '../../assets/banners/2.jpg'
import axios from 'axios';

const  {VITE_FIREBASE_API_ENDPOINT} = import.meta.env;

export const getData = async () => {
  
  try {
    const response = await axios.get(VITE_FIREBASE_API_ENDPOINT);
    // console.log('Data fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const banners = [
    {
      image: banner1,
      name: 'banner1'
    },
    {
      image: banner2,
      name: 'banner2'
    }
  ]

  export const purColor = '#9d00Ff';
  export const beiColor = '#EDE8D0';