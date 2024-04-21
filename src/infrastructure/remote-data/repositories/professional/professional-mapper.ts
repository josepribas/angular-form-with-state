import { ProfessionalDTO } from './professional-dto';
import { Professional } from '../../../../domain/professional/professional';
import { Mapper } from '../../../../domain/mapper';
import { ProfessionalState } from '../../../../domain/professional/professional-state';

export class ProfessionalRepositoryMapper extends Mapper<ProfessionalDTO, Professional> {
  mapFrom(param: ProfessionalDTO): Professional {
    return {
      id: param.id,
      name: param.name,
      locked: param.locked,
      validated: param.validated,
      state: new ProfessionalState()
    };
  }
  mapTo(param: Professional): ProfessionalDTO {
    return {
      id: param.id,
      name: param.name,
      locked: param.locked,
      validated: param.validated
    }
  }
}


