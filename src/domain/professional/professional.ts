import { ProfessionalState } from "./professional-state";

export class Professional {
  id: number = 0;
  name: string = "";
  email?: string;
  createdAt?: Date;
  locked: boolean = false;
  validated: boolean = false;
  state: ProfessionalState = new ProfessionalState();
}
