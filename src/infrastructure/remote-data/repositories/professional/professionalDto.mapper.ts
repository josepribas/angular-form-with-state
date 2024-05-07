import { ProfessionalDto } from './professionalDto';
import { Professional } from '../../../../domain/professional/professional';
import { Mapper } from '../../../../common/mapper';
import { ProfessionalNotValidatedNotBlocked, ProfessionalState } from '../../../../domain/professional/professionalState';

export class ProfessionalDtoMapper extends Mapper<ProfessionalDto, Professional> {
  mapFrom(param: ProfessionalDto): Professional {
    const professional = new Professional()
    professional.id = param.id;
    professional.name = param.name
    professional.blocked = param.blocked;
    professional.validated = param.validated;
    professional.state = ProfessionalState.fromProfessional(professional);
    return professional;
  }
  mapTo(param: Professional): ProfessionalDto {
    return {
      id: param.id,
      name: param.name,
      vatNumber: param.vatNumber,
      blocked: param.blocked,
      validated: param.validated
    }
  }
}


