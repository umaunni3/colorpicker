// methods for finding the prices of different color options of a product

// need to be able to fetch the product urls of all the color variants, if they exist
// and then have a method for opening a color variant's url and fetching the price and returning it (using some kind of curl request probably)

// and then a sort of handler method to link these together: it fetches product urls of color variants,
// passes each one into the method to find its price, keeps track of all the prices and their color variants,
// and then finally directs the current tab to the url of the best color variant

// * for now, just print the best color variant's url to console?
// * also, maybe want to think about how to notify the user if multiple options have the same lowest price (and should
//   this be a separate case from when all the color options are the same price? (ie. there is no color that's cheaper 
//   than any other color)? idk, things to think about

