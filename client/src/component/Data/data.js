import banner1 from '../../assets/banners/1.jpg'
import banner2 from '../../assets/banners/2.jpg'
import axios from 'axios';

export const getData = async () => {
  try {
    const response = await axios.get('https://shaddai-f3ac3-default-rtdb.firebaseio.com/data.json');
    console.log('Data fetched successfully:', response.data);
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