function downloadFile() {
    const userInput = document.getElementById("userInput").value;
    const validCodes = ["4285710737","6152650001","4311817460","3101701294","8901568542","4439685360","6328180957","2007000254","0299637937","4170647858","1619859679","4276062268" ];
    const validCodes2 = ["5471856491", "1003776035", "7413703056","4490860348","5882975376","6259319368","1692914350","3455176918","5695800980","8629482062","6044528637","7120072575" ];
    const validCodes3 = ["8635308380","4559664584","1134903908","0654070997","9126969817","3607496046","6063195109","6884389809","8816664049","1531460593","4357353877","5148743515"];
    const validCodes4 = ["0044503426","8975580171","9355824748","8836471609","5409155955","1780467848","5645244887","2421354104","9101613818","3393140368","0274153586","9950419933"];
    const validCodes5 = ["6591786604","5705281017","6612640149","2758500378","7054251164","6005418233","1393051041","3616675165","9329311598","8522968056","1083965143","1929665099"] ;
    const validCodes6 = ["1437487703","8997920248","9242139656","6403184246","5371253216","0091046205","9742075105","1197448105","1465181358","2008457829","3164770550","6566617708",];
    const validCodes7 = ["5255184910","2859548146","8511715842","8255378756","9026969775","4534038403","2010357460","3012725815","5459751072","2864353468","7470238604"]
    //1 = Delay
    if (validCodes.includes(userInput)) {
        const fileURL = "https://drive.google.com/uc?export=download&id=13rUnxEd1FPJG1d8ey3z2ul-IqYvaRqzO"; 
        window.location.href = fileURL;
    } else {
    }
    //المساحة
    if (validCodes2.includes(userInput)) {
        const fileURL = "https://drive.google.com/uc?export=download&id=14LcC9kDYDgASZjeFEPqnaxCt_R-MrudR"; 
        window.location.href = fileURL;
    } else {
    }
   //سعر رخيييص
   if (validCodes3.includes(userInput)) {
    const fileURL = "https://drive.google.com/uc?export=download&id=1wfFLnauptlP4j9Wu88-5tEwqcGcwyDwY"; 
    window.location.href = fileURL;
} else {
}
 //internet
 if (validCodes4.includes(userInput)) {
    const fileURL = "https://drive.google.com/uc?export=download&id=1GpeLG-4hCgUANvUGjVTghqMBXAnJrDKb"; 
    window.location.href = fileURL;
} else {
}
//apps
if (validCodes5.includes(userInput)) {
    const fileURL = "https://drive.google.com/uc?export=download&id=1xdYsi1AkOuhfEee_6AiZgq5uvLcW-6ac"; 
    window.location.href = fileURL;
} else {
}
//storge
if (validCodes6.includes(userInput)) {
    const fileURL = "https://drive.google.com/uc?export=download&id=1TnYoGztb1EhgvU0XEKn4tl882t8zEEU9"; 
    window.location.href = fileURL;
} else {
}
//all pack hahahahah
if (validCodes7.includes(userInput)) {
    const fileURL = "https://drive.google.com/uc?export=download&id=140q63x66VIutqxx5eSyKM-MVf1uQZ6E9"; 
    window.location.href = fileURL;
} else {

}
}

