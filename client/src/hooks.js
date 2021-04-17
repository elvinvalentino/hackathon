import { useState } from 'react';

export const useForm = (initialData, cb) => {
  const [data, setData] = useState(initialData);

  const handleOnChange = e => setData(prevState => ({
    ...prevState,
    [e.target.name]: e.target.value
  }))

  const handleOnSubmit = e => {
    e.preventDefault();
    cb()
  }

  return {
    data,
    handleOnChange,
    handleOnSubmit
  }
}