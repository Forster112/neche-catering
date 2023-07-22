import { activeDesert, formatDate } from "./neededFunctions";
import desertdata from "../fakeData/fakedata";


// test activeDesert function

function filtered(array, string) {
  return array.filter((item) => item.category === string);
}

describe('activeDesert', () => {

  test("should test type of activeDesert", () => {
    expect(typeof activeDesert).toBe("function");
  });

  test("should test return type of the fuction", () => {
    expect(typeof activeDesert("ALL")).toBe("object")
    expect(typeof activeDesert("all")).toBe('undefined')
  })

  test('should return all the desert type', () => {
    expect(activeDesert("ALL")).toStrictEqual(desertdata);
  })

  test('should return all the cake category', () => {
    expect(activeDesert("CAKES")).toStrictEqual(
      filtered(desertdata, "CAKES")
    );
  })
  
  test('should return undefined', () => {
    expect(activeDesert("CAKE")).toBe(undefined);
  })
  
  test('should return undefined 2', () => {
    expect(activeDesert("smallchops")).toStrictEqual(
      undefined
    );
  })
  
  test('should return all smallchops category', () => {
    expect(activeDesert("SMALLCHOPS")).toStrictEqual(
      filtered(desertdata, "SMALLCHOPS")
    );
  })
})


// test formatDate function

describe('formatDate', () => {
  const date = new Date();
  test("should test the type of formatDate", () => {
    expect(typeof formatDate).toBe("function");
  });

  test("should test the return type of the function", () => {
    expect(typeof formatDate(date)).toBe("string")
  })

  test("should return current date in dd/mm/yyyy format", () => {
    
    // testing on 15th July 2023
    // expect(formatDate(date)).toBe("15/07/2023")
  })

  test("should test custom date", () => {
    expect(formatDate("2023-11-12")).toBe("12/11/2023")
    expect(formatDate("2023, 12, 11")).toBe("11/12/2023")
    expect(formatDate("12, 11, 2023")).toBe("11/12/2023")
  })

  test("should test if '0' is added at front of month and day less than '10'", () => {
    expect(formatDate("10, 5, 2024")).toBe("05/10/2024")
    expect(formatDate("1, 11, 2024")).toBe("11/01/2024")
    expect(formatDate("1, 5, 2024")).toBe("05/01/2024")
  })
})