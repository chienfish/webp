var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
var id1 = 0, id2 = 0, id3 = 0, id4 = 0, id5 = 0, id6 = 0;;
var imgArr1 = [], imgArr2 = [], imgArr3 = [], imgArr4 = [], imgArr5 = [], imgArr6 = [];
var indexArr1 = [], indexArr2 = [], indexArr3 = [], indexArr4 = [], indexArr5 = [], indexArr6 = [];
var jsImg = new Array("./A.jpg", "./B.jpg", "C.jpg", "./D.jpg", "./E.jpg",
            "./F.jpg", "./G.jpg", "./H.jpg", "./I.jpg", "./J.jpg", "./K.jpg", "./L.jpg",  
            "./M.jpg", "./N.jpg", "./O.jpg", "./P.jpg", "./Q.jpg", "./R.jpg", "./S.jpg", 
            "./T.jpg", "./U.jpg", "./V.jpg", "./W.jpg", "./X.jpg", "./Y.jpg", "./Z.jpg");

function splitPart(index){
    var splitIndex = index.split(/[./.jpg]/);
    var joinIndex = splitIndex.join(' ');
    var result = String(joinIndex).trim();

    return result;
}

function randomImg(){
    var index1 = Math.floor(Math.random()*jsImg.length);
    var index2 = Math.floor(Math.random()*jsImg.length);
    var index3 = Math.floor(Math.random()*jsImg.length);
    var index4 = Math.floor(Math.random()*jsImg.length);
    var index5 = Math.floor(Math.random()*jsImg.length);
    var index6 = Math.floor(Math.random()*jsImg.length);

    $("#create1").prepend("<img src='" +jsImg[index1]+"' width = 55>");
        imgArr1.push(splitPart(jsImg[index1]));
        i1++;
        indexArr1[id1] = index1;
        id1++;
    $("#create2").prepend("<img src='" +jsImg[index2]+"' width = 55>");
        imgArr2.push(splitPart(jsImg[index2]));
        i2++;
        indexArr2[id2] = index2;
        id2++;
    $("#create3").prepend("<img src='" +jsImg[index3]+"' width = 55>");
        imgArr3.push(splitPart(jsImg[index3]));
        i3++;
        indexArr3[id3] = index3;
        id3++;
    $("#create4").prepend("<img src='" +jsImg[index4]+"' width = 55>");
        imgArr4.push(splitPart(jsImg[index4]));
        i4++;
        indexArr4[id4] = index4;
        id4++;
    $("#create5").prepend("<img src='" +jsImg[index5]+"' width = 55>");
        imgArr5.push(splitPart(jsImg[index5]));
        i5++;
        indexArr5[id5] = index5;
        id5++;
    $("#create6").prepend("<img src='" +jsImg[index6]+"' width = 55>");
        imgArr6.push(splitPart(jsImg[index6]));
        i6++;
        indexArr6[id6] = index6;
        id6++;
}

function cmpNdel(str){
    if (str === imgArr1[0]){
        imgArr1.shift();
        i1--;
        indexArr1.shift();
        id1--;
        $("#create1").html("");
        for (var i = 0; i < id1; i++)
            $("#create1").prepend("<img src='" +jsImg[indexArr1[i]]+"' width = 55>");
    } else if (str === imgArr2[0]){
        imgArr2.shift();
        i2--;
        indexArr2.shift();
        id2--;
        $("#create2").html("");
        for (var i = 0; i < id2; i++)
            $("#create2").prepend("<img src='" +jsImg[indexArr2[i]]+"' width = 55>");
    } else if (str === imgArr3[0]){
        imgArr3.shift();
        i3--;
        indexArr3.shift();
        id3--;
        $("#create3").html("");
        for (var i = 0; i < id3; i++)
            $("#create3").prepend("<img src='" +jsImg[indexArr3[i]]+"' width = 55>");
    } else if (str === imgArr4[0]){
        imgArr4.shift();
        i4--;
        indexArr4.shift();
        id4--;
        $("#create4").html("");
        for (var i = 0; i < id4; i++)
            $("#create4").prepend("<img src='" +jsImg[indexArr4[i]]+"' width = 55>");
    } else if (str === imgArr5[0]){
        imgArr5.shift();
        i5--;
        indexArr5.shift();
        id5--;
        $("#create5").html("");
        for (var i = 0; i < id5; i++)
            $("#create5").prepend("<img src='" +jsImg[indexArr5[i]]+"' width = 55>");
    } else if (str === imgArr6[0]){
        imgArr6.shift();
        i6--;
        indexArr6.shift();
        id6--;
        $("#create6").html("");
        for (var i = 0; i < id6; i++)
            $("#create6").prepend("<img src='" +jsImg[indexArr6[i]]+"' width = 55>");
    }
}

var press = true;
var time1 = 0;
var time2 = 0;
var totalTime = 0;
$(document).ready(function(){
    $(document).keydown(function(){
        var e = window.event;
        var str = String.fromCharCode(e.keyCode);
        $("#input").append(str);
        if (e.keyCode == 32) randomImg();
        cmpNdel(str); 

        if (press == true){
            time1 = new Date().getTime();
            press = !press;
        } else{
            time2 = new Date().getTime();
            press = !press;
        }

        var spendTime = Math.abs(time2 - time1);
        if (time1 == 0 || time2 == 0)
            spendTime = 0;
        totalTime += spendTime;

        setInterval(function(){
            move();
            while (totalTime >= 670){     //1秒1.5個字 => 0.67秒1個字
                randomImg();
                totalTime -= 670;
                if (((id1 >= 12 || id2 >= 12)||(id3 >= 12 || id4 >= 12))||(id5 >= 12 || id6 >= 12)){
                    alert("!! Game Over !!");
                    window.location.reload();
                    break;
                }
            }  
        });
    });
});

function move(){
    $("#create1").animate({left: "+=10px"});
    $("#create2").animate({left: "+=10px"});
    $("#create3").animate({left: "+=10px"});
    $("#create4").animate({left: "+=10px"});
    $("#create5").animate({left: "+=10px"});
    $("#create6").animate({left: "+=10px"});
}