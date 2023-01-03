const ClothesComp = (props) => {
    return (  
        <>
            <div className="cont_img_box">
                <img src={`${process.env.PUBLIC_URL}/${props.name}.png`} alt="옷사진" />
                <p>{props.name}</p>
            </div>
        </>
    );
}
 
export default ClothesComp;