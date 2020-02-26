let e = ['hello', 'black'];
let v = ['xin chao', 'mau den'];
let text = prompt('nhap tu ban muon tra ');
let b = text.split(' ');
let c = e.indexOf(b[0]);
if(c!=-1){
    alert(v[c]);
}else{
    alert('Tu dien hien khong co tu do');
}