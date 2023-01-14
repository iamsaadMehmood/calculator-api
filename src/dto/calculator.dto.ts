import { IsInt, IsNumber, IsString, Min } from 'class-validator';

export class CalculatorDto {
  @Min(0)
  @IsNumber()
  firstNumber: number;
  @Min(0)
  @IsNumber()
  secondNumber: number;
  @IsString()
  operation: string;
}
