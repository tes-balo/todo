import scrape from 'website-scraper'; // only as ESM, no CommonJS
const websiteUrl = 'https://basetrades.org';

scrape({
  urls: [websiteUrl],
  urlFilter: function (url) {
    return url.indexOf(websiteUrl) === 0;
  },
  recursive: true,
  maxDepth: 50,
  prettifyUrls: true,
  filenameGenerator: 'bySiteStructure',
  directory: './slimcodes',
})
  .then((data) => {
    console.log('Entire website succesfully downloaded');
  })
  .catch((err) => {
    console.log('An error ocurred', err);
  });
