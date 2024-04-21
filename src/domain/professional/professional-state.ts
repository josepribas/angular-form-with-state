import { Professional } from "./professional";

export abstract class ProfessionalState {
  
  static fromProfessional(professional: Professional): ProfessionalState {

    let state: ProfessionalState = new ProfessionalNotValidatedNotBlocked(professional);

    if (professional.validated && professional.blocked)
      state = new ProfessionalValidatedBlocked(professional);

    if (professional.validated && !professional.blocked)
      state = new ProfessionalValidatedNotBlocked(professional);

    if (!professional.validated && professional.blocked)
      state = new ProfessionalNotValidatedBlocked(professional);

    return state;
  }

  constructor(context: Professional){
  }
}

export class ProfessionalNotValidatedNotBlocked extends ProfessionalState {

}

export class ProfessionalNotValidatedBlocked extends ProfessionalState {

}
export class ProfessionalValidatedNotBlocked extends ProfessionalState {

}
export class ProfessionalValidatedBlocked extends ProfessionalState {

}
