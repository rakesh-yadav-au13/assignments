import DistrictSchema from "../models/schema/DistrictSchema";
import StateSchema from "../models/schema/StateSchema";

export const CreateDistrict = async (req, res) => {
  try {
    const { district_name, state_name } = req.body;
    let state = await StateSchema.findOne({ state_name: state_name });
    if (!state) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        errors: [
          {
            value: state_name,
            msg: "State is not exist",
            param: "state Id",
            location: "body",
          },
        ],
      });
    }
    let district = await DistrictSchema.findOne({
      district_name: district_name,
    });
    if (district) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        errors: [
          {
            value: district_name,
            msg: "District name already exist",
            param: "district_name",
            location: "body",
          },
        ],
      });
    }

    district = new DistrictSchema({
      stateId: state._id,
      district_name,
    });
    await district.save();
    return res.status(200).json({
      success: true,
      status: 200,
      data: {},
      errors: [],
      message: "Operation performed successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const GetDistrict = async (req, res) => {
  try {
    const Id = req.query.state_id;

    let district = await DistrictSchema.find(
      { stateId: Id },
      { _id: 1, district_name: 1 }
    );

    return res.status(200).json({
      success: true,
      status: 200,
      data: district,
      errors: [],
      message: "District data fetched successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
