import { getCurrencySymbol, extractFormData } from './utils';
import { jobTemplate } from './templates';

export class JobSearch {
    constructor(
        searchFormSelector,
        resultsContainerSelector,
        loadingElementSelector,
    ) {
        this.searchForm = document.querySelector(searchFormSeletor);
        this.resultsContainer = document.querySelector(resultsContainerSelector);
        this.loadingElement = document.querySelector(loadingElementSelector)
    }
    
    setCountryCode() {
        this.countryCode = 'usa';
        this.setCurrencyCode();
        
        fetch('http://ip-api.com/json')

            .then(results => results.json())
            .then(results => {
                this.countryCode = results.countryCode.toLowerCase();
                this.setCurrencySymbol();
            });
    }

    setCurrencyCode() {
        this.CurrencySymbol = getCurrencySymbol(this.countryCode);
    }
    
    configureFormListener() {
        this.searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.resultsContainer.innerHTML = '';
            const { search, location } = extractFormData(this.searchForm);
            this.startLoading();
            fetch(`http://localhost:3000/?search=${search}&location=${location}&country=${this.countryCode}`)
            .then(response => response.json())
            .then(({results}) => {
                this.stopLoading()
                return results
                    .map(job => jobTemplate( job, this.currencySymbol))
                    .join('');
            })
            .then(jobs => this.resultsContainer.innerHTML = jobs)
            .catch(() => this.stopLoading());
        });
    }

    startLoading(){
        this.loadingElement.classlist.add('loading');
    }

    stopLoading(){
        this.loadingElement.classlist.remove('loading');
    }
    }