import { ProfessionalNotValidatedNotBlocked, ProfessionalState } from "./professional-state";

export class Professional {
  id: number = 0;
  name: string = "";
  email?: string;
  createdAt?: Date;
  blocked: boolean = false;
  validated: boolean = false;
  state: ProfessionalState = new ProfessionalNotValidatedNotBlocked(this);
  vatNumber: string = "";
}
