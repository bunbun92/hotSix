const LaundryRepository = require("../repositories/laundry.repository");
const { laundry } = require("../models/index");

class LaundryService {
  laundryRepository = new LaundryRepository(laundry);

  findApplyById = async (userId) => {
    const allLaundryById = await this.laundryRepository.findApplyById(userId);

    allLaundryById.sort((a, b) => {
      return b.createAt - a.createAt;
    });

    return allLaundryById.map((laundry) => {
      return {
        laundryName: laundry.laundryName,
        laundryContent: laundry.laundryContent,
        laundryAddress: laundry.laundryAddress,
        laundryImg: laundry.laundryImg,
        requests: laundry.requests,
        userId: laundry.userId,
      };
    });
  };

  createApply = async (
    laundryName,
    laundryContent,
    laundryAddress,
    laundryImg,
    requests,
    userId
  ) => {
    const createApplyData = await this.laundryRepository.createApply(
      laundryName,
      laundryContent,
      laundryAddress,
      laundryImg,
      requests,
      userId
    );

    return {
      laundryName: createApplyData.laundryName,
      laundryContent: createApplyData.laundryContent,
      laundryAddress: createApplyData.laundryAddress,
      laundryImg: createApplyData.laundryImg,
      requests: createApplyData.requests,
    };
  };
}

module.exports = LaundryService;