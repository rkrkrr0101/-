const NamuDataService = require("../service/namudataservice");
const KindError = require("../exception/kinderror");

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
const NamuDataRepositoryMock = {
  findAll: async () => {
    return data;
  },
  findWhere: async (kind) => {
    return data.filter((obj) => {
      if (obj.nd_kind == kind) {
        return obj;
      }
    });
  },
};

describe("서비스의 findall", () => {
  test("전체조회를 했을때 결과값이 5개 나와야함", async () => {
    //g

    const namudataservice = new NamuDataService({
      DataRepository: NamuDataRepositoryMock,
    });
    //w
    const Data = await namudataservice.findAll();
    //t
    expect(Data.length).toEqual(5);
  });
});

describe("서비스의 findWhere", () => {
  test("kind검색시 kind에 맞는걸 리턴해야함", async () => {
    //g

    const namudataservice = new NamuDataService({
      DataRepository: NamuDataRepositoryMock,
    });
    //w
    const Data = await namudataservice.findKind("day");
    //t
    expect(Data.length).toEqual(1);
    expect(Data[0].nd_kind).toEqual("day");
  });
  test("kind검색시 kind종류가 케이스에 없으면 예외를 리턴해야함", async () => {
    //g

    const namudataservice = new NamuDataService({
      DataRepository: NamuDataRepositoryMock,
    });
    //w
    //t
    const exceptionkind = "dayar";
    await expect(async () => {
      await namudataservice.findKind(exceptionkind);
    }).rejects.toThrowError(
      new KindError(exceptionkind, "현재 kind케이스가 배열에 없습니다")
    );
  });
});

// 전체검색시 전체를 리턴해야함
// kind검색시 kind에 맞는걸 리턴해야함
// kind검색시 kind종류가 케이스에 없으면 예외를 리턴해야함
