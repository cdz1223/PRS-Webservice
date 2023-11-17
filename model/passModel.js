const mongoose = require('mongoose');
const DOCUMENT_NAME = 'EngrBom';
const COLLECTION_NAME = 'engrboms';

let getPassSchema = new mongoose.Schema(
    {
    bomNo: String,
  owner: String,
  platform: String,
  customer: String,
  program: String,
  version: String,
  device: String,
  targetDevice: String,
  family: String,
  source: String,
  plant: String,
  lotType: String,
  stage: String,
  step: String,
  sitemap: String,
  status: String,
  correlation: Boolean,
  // sqlId: number;
  productionline: String,
  bomVer: String,
  igxlVer: String,
  smartestVer: String,
  //bomchange?: string[],
  userProgram: String,
  userProgramMd5: String,
  msPath: String,
  //code: EngrCodestore,
  bomMd5: String,
  //createdBy?: Engrtimeline[],
  //updatedBy?: Engrtimeline[],
  //buyoffBy?: Engrtimeline[],
  /////////////////////
  ID: String,
  //Canceler: String,
  //Same: String,
  //SameWith: String,
  //SameWithID: String,
  //SameWithStatus: String,
  //SameWithStep: String,
  //Loadfile: String,
  //Testsuffix: String,
  //Programorder: String,
  //op1: String,
  //op2: String,
  //op3: String,
  //op1path: String,
  //op2path: String,
  //op3path: String,
  //op1program: String,
  //op2program: String,
  //op3program: String,
  //passflag: String,
  //evdipath: String,
  //evdifile: String,
  //remark: String
  /////////////////////
}
);

getPassSchema.set('collection', 'engrboms');         // 將Schema連至資料庫
module.exports = mongoose.model('getPassSchema', getPassSchema);    // 將Schema編譯成Model