import { FC } from "react";
import { BsPinAngle } from "react-icons/bs";
import { CiPillsBottle1 } from "react-icons/ci";
import classes from "./GlobalDetails.module.scss";
import { BloodGroup, CarType, Diet, HouseType, SmokeDrink } from "../../../types/enums";

interface MyComponentProps {
  setEditDetails: (details: boolean) => void;
  step3Response: any;
}
const LifeStyleDetails: FC<MyComponentProps> = ({
  step3Response,
  setEditDetails,
}) => {
  function getKeyByValue(value: string, enumObject: any) {
    for (const [key, val] of Object.entries(enumObject)) {
      if (val === value) {
        return key.replaceAll("_", " ");
      }
    }
  }

  const BasicDetails = {
    pin: true,
    pinValue: "Open to pets?",
    data: [
      {
        name: "Diet",
        value: getKeyByValue(String(step3Response?.diet), Diet) || "NA",
      },
      {
        name: "Smoking",
        value:
          getKeyByValue(String(step3Response?.smoking), SmokeDrink) || "NA",
      },
      {
        name: "drinking",
        value:
          getKeyByValue(String(step3Response?.drinking), SmokeDrink) || "NA",
      },
      {
        name: "Love pets",
        value: step3Response?.love_pets == 1 ? "Yes" : "No" || "NA",
      },
      {
        name: "Owns House",
        value: step3Response?.Owns_house == 1 ? "Yes" : "No" || "NA",
      },
      {
        name: "Owns car",
        value: step3Response?.Owns_car == 1 ? "Yes" : "No" || "NA",
      },
      {
        name: "House Details",
        value:  step3Response?.Owns_house == 1 ? getKeyByValue(String(step3Response?.home_type), HouseType) : null,
      },
      {
        name: "Car Details",
        value: step3Response?.Owns_car == 1 ? getKeyByValue(String(step3Response?.car_details), CarType) : null,
      },
      {
        name: "Blood group",
        value:
          getKeyByValue(String(step3Response?.blood_group), BloodGroup) || "NA",
      },
      {
        name: "Religious Belief",
        value: step3Response?.religious_belief || "NA",
      },
      {
        name: "Thalassemia",
        value: step3Response?.Thalassemia == 1 ? "Yes" : "No" || "NA",
      },
    ],
  };
  return (
    <>
      <div className={classes.content}>
        <div className={classes.DetailsTypeSec}>
          <div className={classes.DetailsTypeLeft}>
            <CiPillsBottle1 />
            LifeStyle
          </div>
          <span className={classes.Edit} onClick={() => setEditDetails(true)}>
            Edit
          </span>
        </div>
        <div className={classes.Userdetails}>
          {BasicDetails.data.map((item) => {
            return (
              <>{item.value !== null &&
                <div className={classes.UserdetailsSec} key={item.name}>
                  <p className={classes.input_Name}>{item.name}</p>
                  <p
                    className={
                      item.value === "NA"
                        ? classes.input_Value_NotFilled
                        : classes.input_Value
                    }
                  >
                    {item.value === "NA" ? "Not Field in" : item.value}{" "}
                  </p>
                </div>}
              </>
            );
          })}
        </div>
        {BasicDetails.pin && (
          <div className={classes.pin}>
            <BsPinAngle />
            {BasicDetails.pinValue}
          </div>
        )}
      </div>
    </>
  );
};

export default LifeStyleDetails;
