import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfessionalDto } from './professionalDto';
import { Professional } from '../../../../domain/professional/professional';
import { ProfessionalDtoMapper } from './professionalDto.mapper';
import { ProfessionalRepository } from '../../../../domain/professional/professional.repository';

@Injectable({
  providedIn: 'root',
})
export class RemoteProfessionalRepository extends ProfessionalRepository {
  professionalDtoMapper = new ProfessionalDtoMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getById(params: { id: number }): Observable<Professional> {
    return this.http.get<ProfessionalDto>('https://example.com/user')
      .pipe(map(this.professionalDtoMapper.mapFrom));
  }
}
