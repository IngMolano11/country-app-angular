import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;
  public isLoanding: boolean = false;

  constructor( private countriesService: CountriesService) {}

    ngOnInit(): void {
      this.countries = this.countriesService.cacheStore.byRegion.countries;
      this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    }

    searchByRegion( region: Region ): void{
      this.selectedRegion = region;
      this.isLoanding = true;
      this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries,
        this.isLoanding = false;
      });
    }
  }







