const array =[22,33,47,2678,286,786,921];
array.forEach((value)=>{
    console.log(value);
});
const array1 =[28,5,14,2,77,20,3,8,25,134,168,189];
console.log(Math.min.apply(null,array1));
console.log(Math.max.apply(null,array1));
const map =array1.map((value)=>{
    return value *2;
});
console.log(map);
const object ={
    labels:['january','february','march','april','may',],
    data:[400,300,600,200,500],
    backgroundcolor:'rgba(54,162,235,0,2)',
    borderwidth:1
};
console.log(object);
const options={
    scales:{
        y:{
            beginAtZero:true
        }
    }
};