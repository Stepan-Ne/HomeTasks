import {CourseType, chipCourses} from "../Message";

export type PropsType = {
    age: number
    name: string
    isDone: boolean
    address: {
        city: string
        index: number
    }
}



let arr: Array<CourseType>
beforeEach(() => {
    arr = [
        {title: "Java", price: 200},
        {title: "SQL", price: 160},
        {title: "JS", price: 150}
    ]

})

test("cheap courses", () => {
    let chCo;
    chCo = chipCourses(arr);
    expect(chCo.length).toBe(1)
    expect(chCo[0].title).toBe("JS")
    expect(chCo[0]).toStrictEqual({title: "JS", price: 150})

})
// type ArrType = {
//     title: string
//     int: number
// }
// let arr: Array<ArrType>
// let props: PropsType;
//
// beforeEach(() => {
//     arr = [
//         {title: "react", int: 100},
//         {title: "redux", int: 150}
//     ]
// })
// beforeEach(() => {
//      props = {
//         age: 34,
//         name: "John",
//         isDone: true,
//          address: {
//              city: "Moscow",
//              index: 123123
//          }
//     }
// })
//
// test("assign", () => {
//     const {age, isDone} = props;
//     const {city} = props.address
//     const {address} = props
//
//     expect(age).toBe(34)
//     expect(isDone).toBe(true)
//     expect(city).toBe("Moscow")
//     expect(address).toStrictEqual({city: "Moscow", index: 123123})
//
// })
// test("destructing array", () => {
//     const [arr1, arr2] = arr;
//
//     expect(arr1.title).toBe("react");
//     expect(arr2.int).toBe(150);
//     expect(arr2).toStrictEqual({title: "redux", int: 150})
// })
