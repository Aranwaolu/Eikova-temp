const saveUserToLocal = (token: string) => {
   const  localObject = {
       token, timeStamp: Date.now()
   }
  localStorage.setItem("eikova-tk", JSON.stringify(localObject));
};
export default saveUserToLocal;
