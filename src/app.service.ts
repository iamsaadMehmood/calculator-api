import { BadRequestException, Injectable } from '@nestjs/common';
import { CalculatorDto } from './dto/calculator.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  calculate(calculateDto: CalculatorDto): number {
    if (calculateDto.operation === 'multiply')
      return calculateDto.firstNumber * calculateDto.secondNumber;
    else if (calculateDto.operation === 'addition') {
      return calculateDto.firstNumber + calculateDto.secondNumber;
    } else if (calculateDto.operation === 'subtraction') {
      return calculateDto.firstNumber - calculateDto.secondNumber;
    } else {
      throw new BadRequestException(
        'operation must be either Addition,multiplication,or subtraction',
      );
    }
  }
}
