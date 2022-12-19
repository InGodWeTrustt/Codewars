class PaginationHelper {
	constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	return this.collection.length
	}
	pageCount() {
	// returns the number of pages
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
	}
}