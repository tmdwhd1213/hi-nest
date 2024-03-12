import { IsNumber, IsOptional, IsString } from 'class-validator';

// 여기 없는 id나 이런 프로퍼티를 넣으면 "property id should not exist"에러
export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
