import { OperationClaim } from "./operationClaim";
import { ResponseModel } from "./responseModel";

export interface OperationClaimResponseModel extends ResponseModel{
    data:OperationClaim[];
}