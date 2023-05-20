

{
/*  how to use:

    let encodedImageBase64 = '';
    convertImageToBinary(imagePath, (result)=>
        encodedImageBase64 = result;
    );

    console.log(encodedImageBase64);
*/}
export const convertImageToBinary = (file, callback) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => { callback(reader.result); };
    reader.onerror = () => { console.error("convertBinaryToImage() ->  [File: " + file + ", Error: " + exception);}
}


{/*exemple
    let 

*/}
export const convertBinaryToImage = (encodedImageBase64) => {
    try {
        let Image = ({ data }) => <img src={`data:image/jpeg;base64, ${data}`} />
        return <Image data={encodedImageBase64} /> 
    } catch (error) {
        
    }
}


