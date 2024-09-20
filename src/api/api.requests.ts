const endPoints = {
    upload: "user/upload",
    download:(fileName:string)=>`user/download/${fileName}`
}

export default endPoints