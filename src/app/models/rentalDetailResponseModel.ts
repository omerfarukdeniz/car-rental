import { RentalDetailDto } from "./rentalDetailDto";
import { ResponseModel } from "./responseModel";

export interface RentalDetailResponseModel extends ResponseModel{
    data:RentalDetailDto[];
}