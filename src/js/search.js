import debounce from 'lodash.debounce';

import API from './fetchCountries';
import getRefs from './gets-refs'

import countryCardTpl from '../templates/country-card.hbs'
import countryListTpl from '../templates/country-list.hbs'

import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


const refs = getRefs()
let searchCountry = '';

refs.searchInput.addEventListener(
  'input',
  debounce(() => {
    onSearch();
  }, 500),
);


function onSearch() {
  searchCountry = refs.searchInput.value;
  
 
  if (searchCountry) {
     API.fetchCountries(searchCountry).then(countryCheck).catch(onFetchError);
  }

  if (!searchCountry) {
    clearMarkup();
  }
}

function onFetchError(error) {
  
  console.log(error);
}


function countryCheck(country) {
  if (country.length > 10) {
     clearMarkup();
    tooMany();
     
    
  } else if (country.length <= 10 && country.length > 1) {
     clearMarkup();
    rendercountryCard(countryListTpl, country);
   

  } else if (country.length === 1) {
     clearMarkup();
    rendercountryCard(countryCardTpl, country[0]);
   
  } 
}



function rendercountryCard(template,country) {
    const markup = template(country);
    console.log(markup);
    refs.cardContainer.innerHTML = markup
}


function tooMany() {
  error({
    title: 'Uh Oh!',
    text: 'Too many matches found. Please enter a more specific query!',
    
  });
}

function clearMarkup() {
  refs.cardContainer.innerHTML = '';
}



