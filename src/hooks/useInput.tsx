import React, { useState } from "react";


export const useInput = (type:string, initValue?:any) => {
  const [value, setValue] = useState(initValue || "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement> |React.ChangeEvent<HTMLTextAreaElement> ) => {
    setValue(e.target.value);
  };

  return { value, onChange, type };
};
