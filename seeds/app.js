import { JobSearch } from './JobSearch';

const JobSearch = new JobSearch('#search-form', '.result-container', '.loading-element');
JobSearch.setCountyCode();
JobSearch.configureFormListener();