import axios from 'axios';

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ml_default');
  try {
    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/dk2uakyub/auto/upload',
      formData
    );
    //devuelve toda la data del archivo.
    const uploadedData = response.data;
    return uploadedData;
  } catch (error) {
    console.error(error);
  }
};

export const uploadFiles = async (file) => {
  const imageURLArray = [];
  for (let i = 0; i < file.length; i++) {
    const formData = new FormData();
    formData.append('file', file[i]);
    formData.append('upload_preset', 'ml_default');
    try {
      const response = await axios.post(
        import.meta.env.VITE_COUDINARY,
        formData
      );

      const uploadedData = response.data;
      imageURLArray.push(uploadedData);
    } catch (error) {
      console.error(error);
    }
  }

  return imageURLArray;
};
