const name = "soo",
age = 25,
gender = "male"

const sayHi = (name,age,gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
}

sayHi(name,age,gender)
//세개의 파라미터를 설정하고 2개만 불러올 경우 컴파일 오류 남. 
//그러나 변수의 어미에 ?를 추가하면 선택적인 매개변수로 인식되어서 없어도 무방해짐.
//모듈화
export {}