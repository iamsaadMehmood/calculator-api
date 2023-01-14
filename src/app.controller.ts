import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculatorDto } from './dto/calculator.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('calculator')
  calculate(@Body() calculatorDto: CalculatorDto) {
    return this.appService.calculate(calculatorDto);
  }
}
