const fs=require('fs');
const book = {
    title : "complex variable and applications",
    author : "James Ward Brown & Ruel V. Churchill",
    edition : "9th edition",
    publication_year : "2014",
    number_of_pages : "461 pages"
}

fs.writeFileSync("textbook.json",JSON.stringify(book));