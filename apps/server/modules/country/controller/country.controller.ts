import { Controller, Get, Res } from "@nestjs/common";
import { CountryService } from "../services/country.service";

@Controller('country')
export class CountryController {

  constructor (private service: CountryService) {  }

  @Get('name')
  async getCountry(@Res() res) {
    const result = await this.service.getCountryNames();
    res.json(result);
  }
}

