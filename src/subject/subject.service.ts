import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SubjectEntity } from './subject.entity';
import { SubjectDTO } from './subject.dto';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectEntity)
    private subjectRepository: Repository<SubjectEntity>,
  ) {}

  async showAll() {
    return await this.subjectRepository.find();
  }

  async create(data: SubjectDTO) {
    const user = this.subjectRepository.create(data);
    await this.subjectRepository.save(data);
    return user;
  }

  //   async findByfirstName(firstName: string): Promise<UsersDTO> {
  //     return await this.usersRepository.findOne({
  //       where: {
  //         firstName: firstName,
  //       },
  //     });
  //   }

  async read(id: number) {
    return await this.subjectRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<SubjectDTO>) {
    await this.subjectRepository.update({ id }, data);
    return await this.subjectRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.subjectRepository.delete({ id });
    return { deleted: true };
  }
}
