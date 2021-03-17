import { ResponseModel } from "./responseModel";
import { UserOperationClaim } from "./userOperationClaim";

export interface UserOperationClaimResponseModel extends ResponseModel{
    data:UserOperationClaim[];
}