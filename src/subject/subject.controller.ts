import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectDTO } from './subject.dto';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Get()
  async showAllSubject() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.subjectService.showAll(),
    };
  }

  @Post()
  async createSubject(@Body() data: SubjectDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Subject added successfully',
      data: await this.subjectService.create(data),
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.subjectService.read(id),
    };
  }

  //   @Get(':firstName')
  //   async readUserByFirstName(@Param('firstName') firstName: string) {
  //     return {
  //       statusCode: HttpStatus.OK,
  //       data: await this.usersService.findByfirstName(firstName),
  //     };
  //   }

  @Put(':id')
  async uppdateSubject(
    @Param('id') id: number,
    @Body() data: Partial<SubjectDTO>,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Subject update successfully',
      data: await this.subjectService.update(id, data),
    };
  }

  @Delete(':id')
  async deleteSubject(@Param('id') id: number) {
    await this.subjectService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Subject deleted successfully',
    };
  }
}
