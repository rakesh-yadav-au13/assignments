import StateSchema from "../models/schema/StateSchema";

export const GetState = async (req, res) => {
  try {
    let state = await StateSchema.find();
    return res.status(200).json({
      success: true,
      status: 200,
      data: state,
      errors: [],
      message: "State data fetched successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const CreateState = async (req, res) => {
  try {
    const { state_name } = req.body;
    let state = await StateSchema.findOne({ state_name: state_name });
    if (state) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        errors: [
          {
            value: state_name,
            msg: "State name is already exist",
            param: "state_name",
            location: "body",
          },
        ],
        message: "State is already exist",
      });
    }
    state = new StateSchema({
      state_name,
    });
    await state.save();
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
