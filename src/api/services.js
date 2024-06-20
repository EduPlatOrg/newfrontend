import axios from 'axios';

export const uploadFile = async (file) => {
  console.log(file, 'file de services');
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ml_default');
  try {
    const response = await axios.post(import.meta.env.VITE_COUDINARY, formData);
    //devuelve toda la data del archivo.
    const uploadedData = response.data;
    return uploadedData;
  } catch (error) {
    console.error(error);
  }
};

export const uploadFiles = async (file) => {
  console.log(file, 'file de services');
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
      console.log(response.data, 'response de services images DATA');
      const uploadedData = response.data;
      imageURLArray.push(uploadedData);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(imageURLArray, 'array de services');
  return imageURLArray;
};
