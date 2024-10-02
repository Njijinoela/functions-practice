function knightMoves(x, y){
let ax=x+1
let ay=y+2
let allcordinates=""
if(ax>0 && ax<=8 && ay>0 && ay<=8){
    allcordinates=allcordinates+`${ax},${ay} `
}

let bx = x+2;
let by = y+1;
if (bx>0 && bx<=8 && by>0 && by<=8){
    allcordinates=allcordinates+`${bx},${by}`
}

let cx=x+2;
let cy=y-1;
if (cx>0 && cx<=8 && cy>0 && cy<=8){
    allcordinates=allcordinates+`${cx},${cy}`
}

let dx = x+1
let dy = y-2
if (dx>0 && dx<=8 && dy>0 && dy<=8){
    allcordinates=allcordinates+`${dx},${dy}`
}

console.log(allcordinates)

}
knightMoves(2,1);