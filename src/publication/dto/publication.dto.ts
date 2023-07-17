import { IsNotEmpty, IsString, IsDate, IsBoolean, IsOptional } from "class-validator";

export class PublicationDTO{
    @IsString()
    @IsNotEmpty()
    image: string;
  
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    text: string;
  
    @IsDate()
    @IsNotEmpty()
    dateToPublish: string;
  
    @IsBoolean()
    @IsOptional()
    published: boolean = false;
  
    @IsString()
    @IsNotEmpty()
    socialMedia: string;


}