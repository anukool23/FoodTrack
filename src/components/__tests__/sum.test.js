import { sum } from "../sum";

test("Sum function should calculate sum",()=>{
    expect(sum(1,2)).toBe(3);
})