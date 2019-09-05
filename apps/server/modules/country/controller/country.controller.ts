import { Controller, Get, Req, Res } from "@nestjs/common";
import { CountryService } from "../services/country.service";

@Controller('country')
export class CountryController {

  constructor (private service: CountryService) {  }

  @Get('name')
  async getCountry(@Res() res) {
    const result = await this.service.getCountryNames();
    res.json(result);
  }

  @Get('cities')
  async getCities(@Req() req, @Res() res) {
    const result = await this.service.getCitiesNames(req.query.countryISO);
    res.json(result);
  }
}

