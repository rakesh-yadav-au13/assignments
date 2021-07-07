import ChildSchema from "../models/schema/ChildSchema";

export const CreateChild = async (req, res) => {
  try {
    const { name, sex, father_name, mother_name, dob, district_id } = req.body;
    const file = req.photoUrl;
    let child = new ChildSchema({
      name,
      sex,
      father_name,
      mother_name,
      dob,
      district_id,
      photo: file.url,
    });
    await child.save();
    return res.status(200).json({
      success: true,
      status: 200,
      data: child,
      errors: [],
      message: "Operation performed successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const GetChildProfiles = async (req, res) => {
  try {
    let child = await ChildSchema.find().populate(
      "district_id",
      "district_name"
    );
    return res.status(200).json({
      success: true,
      status: 200,
      data: child,
      errors: [],
      message: "Child Profile Details fetched successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
