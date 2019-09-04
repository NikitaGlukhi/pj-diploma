import { Controller, Get, Res } from "@nestjs/common";

@Controller('country')
export class CountryController {
  @Get('name')
  getCountry(@Res() res) {
    res.send([{countryName: 'Ukraine'}]);
  }
}

