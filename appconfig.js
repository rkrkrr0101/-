const NamuDataRepository = require("./namudatas/namuDataRepository");
const NamuDataService = require("./namudatas/namudataservice");
const Data = require("./models/data");

data = Data;

const namuDataRepository = new NamuDataRepository({ datamodel: data });
const namudataservice = new NamuDataService({
  DataRepository: namuDataRepository,
});

module.exports = {
  namudataservice,
  namuDataRepository,
};
