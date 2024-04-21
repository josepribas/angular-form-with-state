import { Observable } from 'rxjs';
import { Professional } from './professional';

export abstract class ProfessionalRepository {
  abstract getById(params: { id: number }): Observable<Professional>;
}
