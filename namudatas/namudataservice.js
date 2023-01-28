const KindError = require("../exception/kinderror");

class NamuDataService {
  constructor({ DataRepository }) {
    this.DataRepository = DataRepository;
  }
  async findAll() {
    return this.DataRepository.findAll();
  }
  async findKind(kind) {
    const kindcase = ["day", "hour", "week", "month"];
    if (!kindcase.includes(kind)) {
      throw new KindError(kind, "현재 kind케이스가 배열에 없습니다");
    }
    return this.DataRepository.findWhere(kind);
  }
}

module.exports = NamuDataService;
//로거만들어서 추가?
