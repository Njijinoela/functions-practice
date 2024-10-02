function knightMoves(x, y){
let ax=x+1
let ay=y+2
let allcordinates=""
if(ax>0 && ax<=8 && ay>0 && ay<=8){
    allcordinates=allcordinates+`${ax},${ay} `
}

console.log(allcordinates)

}
knightMoves(2,1);

