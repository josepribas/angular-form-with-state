import { ProfessionalNotValidatedNotBlocked, ProfessionalState } from "./professionalState";

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
