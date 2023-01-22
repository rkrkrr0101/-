class NamuDataRepository {
  constructor({ datamodel }) {
    this.datamodel = datamodel;
  }

  async findAll() {
    return await this.datamodel.findAll();
  }
  async findWhere(kind) {
    //console.log(datamodel);
    return await this.datamodel.findAll({
      where: {
        nd_kind: kind,
      },
    });
  }
}

module.exports = NamuDataRepository;
// 굳이 액티브 레코드로 만들어뒀는데 이걸 데이터매퍼처럼 래핑해서 바꿔야하나 싶긴한데,
//목표가 그거였으니까 하긴하자 나중에 컨z 하든말든
