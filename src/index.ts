
/* 4번 : class 생성 */
class Human {
   public name : string;
   public age : number;
   public gender : string;
   constructor(name:string,age:number,gender?:string) {//constructor : 생성자 => 생성자는 매서드인데, 클래스가 시작할때마다 실행됨. 클래스로부터 객체를 만들때마다
        this.name = name;
        this.age = age;
        this.gender = gender;
   }
}

const lynn = new Human ("Lynn", 18, "female")

const sayHi = (person :Human) : string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
    //만약에 private 클래스로 선언한다면 클래스 밖에서 호출 불가능 
    //public 클래스로 선언 시, 클래스 밖에서도 호출 가능 
}
console.log(sayHi(lynn))

/*  3번 : object로 선언 
인터페이스 생성 : 자바스크립트에서 작동하지 않음. 
블록체인을 사용할 때, 하나의 블록을 하나의 인터페이스로 생성할 수 있음. 
interface Human {
    name : string,
    age : number, 
    gender : string;
}


const person = {
    name:"nicolas",
    gender : "male",
    age : 22
}

const sayHi = (person : Human ) : string  => {// object 로 선언할 경우 한번에 받아서 타입을 생성한 인터페이스로 설정
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
}
console.log(sayHi(person))
*/
/*
2번 : 변수를 함수 안에 변수를 선언
const sayHi = (name : string ,age : number , gender:string ) : string  => {// 변수로 선언할 경우, 각각의 argument를 따로 파싱 (parsing)
    return `Hello ${name}, you are ${age}, you are a ${gender}`
}
sayHi("young",32 ,"male")
*/

// 1번 
//const name = "soo", age = 25, gender = "male" 변수로 선언해서 호출 가능 ex) sayHi(name,age,gender)

//세개의 파라미터를 설정하고 2개만 불러올 경우 컴파일 오류 남. 
//그러나 변수의 어미에 ?를 추가하면 선택적인 매개변수로 인식되어서 없어도 무방해짐.
//모듈화
export {}