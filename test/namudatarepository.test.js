const NamuDataRepository = require("../repository/namuDataRepository");

const data = [
  {
    id: 1,
    nd_one: "1등",
    nd_two: "2등",
    nd_kind: "hour",
  },
  {
    id: 2,
    nd_one: "1등",
    nd_two: "2등",
    nd_kind: "day",
  },
  {
    id: 3,
    nd_one: "1등",
    nd_two: "2등",
    nd_kind: "week",
  },
  {
    id: 4,
    nd_one: "1등",
    nd_two: "2등",
    nd_kind: "month",
  },
  {
    id: 5,
    nd_one: "1등",
    nd_two: "2등",
    nd_kind: "year",
  },
];
const dataModelMock = {
  findAll: async (Kind) => {
    if (Kind == undefined) {
      return data;
    }
    const kind = Kind.where.nd_kind;
    return data.filter((obj) => {
      if (obj.nd_kind == kind) {
        return obj;
      }
    });
  },
};

describe("레포지토리의 findall", () => {
  test("전체조회를 했을때 결과값이 5개 나와야함", async () => {
    //g

    const namuDataRepository = new NamuDataRepository({
      datamodel: dataModelMock,
    });
    //w
    const dayData = await namuDataRepository.findAll();
    //t
    expect(dayData.length).toEqual(5);
  });
  test("단일조회를 했을때 올바른 결과값이 1개 나와야함", async () => {
    //g
    const namuDataRepository = new NamuDataRepository({
      datamodel: dataModelMock,
    });
    //w
    const dayData = await namuDataRepository.findWhere("day");
    //t
    expect(dayData.length).toEqual(1);
    expect(dayData[0].nd_kind).toEqual("day");
  });
  test("단일조회를 했을때 kind를 잘못입력하면 결과값이 안나와야함", async () => {
    //g

    const namuDataRepository = new NamuDataRepository({
      datamodel: dataModelMock,
    });
    //w
    const dayData = await namuDataRepository.findWhere("daya");
    //t
    expect(dayData.length).toEqual(0);
  });
});

// 레포테스트
//     findall시에 전체검색가능여부
//     findwhere시에 인풋값이 잘못됐을때 여부
//     findwhere시에 인풋값이 맞았을때 여부
// 예외는..없나?
