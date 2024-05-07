import { Professional } from "./professional";

export abstract class ProfessionalState {

  abstract canEditIban(): boolean

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
  override canEditIban(): boolean {
    return true;
  }

}

export class ProfessionalNotValidatedBlocked extends ProfessionalState {
  override canEditIban(): boolean {
    return false;
  }

}
export class ProfessionalValidatedNotBlocked extends ProfessionalState {
  override canEditIban(): boolean {
   return true;
  }

}
export class ProfessionalValidatedBlocked extends ProfessionalState {
  override canEditIban(): boolean {
    return false;
  }

}
